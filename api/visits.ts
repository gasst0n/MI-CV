export default async function handler(req: Request): Promise<Response> {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL!;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

    const response = await fetch(`${url}/incr/portfolio_visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify({ visits: data.result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to count visits' }), { status: 500 });
  }
}
