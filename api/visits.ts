exports.config = {
  runtime: 'nodejs',
};

const crypto = require('crypto');

module.exports = async function handler(req: any, res: any) {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      return res.status(500).json({ error: 'Missing environment variables' });
    }

    // 1️⃣ Identificar visitante
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'unknown';
    const ua = req.headers['user-agent'] || 'unknown';

    const visitorId = crypto
      .createHash('sha256')
      .update(ip + ua)
      .digest('hex');

    const visitorKey = `visitor:${visitorId}`;

    // 2️⃣ Intentar registrar visita única (SETNX)
    const setVisitor = await fetch(`${url}/setnx/${visitorKey}/1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const setResult = await setVisitor.json();

    // 3️⃣ Si es un visitante nuevo → set TTL e incrementar contador
    if (setResult.result === 1) {
      // TTL: 6 horas (21600 segundos)
      await fetch(`${url}/expire/${visitorKey}/21600`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await fetch(`${url}/incr/portfolio_visits`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // 4️⃣ Obtener contador actual
    const countResponse = await fetch(`${url}/get/portfolio_visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const countData = await countResponse.json();

    return res.status(200).json({
      visits: Number(countData.result || 0),
    });
  } catch (err) {
    console.error('Visits error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
