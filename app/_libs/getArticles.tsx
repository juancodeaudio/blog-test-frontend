export default async function getArticles(q?: object) {

  const qs = require('qs');
  const query = qs.stringify(
    q, { encodeValuesOnly: true, }
  );

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?${query}`, {
    cache: 'no-cache',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await response.json()

  return data
}