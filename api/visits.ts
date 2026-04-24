exports.config = {
  runtime: 'nodejs',
};

module.exports = async function handler(req: any, res: any) {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      console.error('Missing env vars');
      return res.status(500).json({ error: 'Missing environment variables' });
    }

    const response = await fetch(`${url}/incr/portfolio_visits`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const txt = await response.text();
      console.error('Upstash error:', txt);
      return res.status(500).json({ error: 'Upstash request failed' });
    }

    const data = await response.json();
    return res.status(200).json({ visits: data.result });
  } catch (err) {
    console.error('Unhandled error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
