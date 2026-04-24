export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      return res.status(500).json({ error: 'Missing env vars' });
    }

    const response = await fetch(`${url}/incr/portfolio_visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return res.status(200).json({ visits: data.result });
  } catch (error) {
    console.error('VISITS API ERROR:', error);
    return res.status(500).json({ error: 'Failed to count visits' });
  }
}
``;
