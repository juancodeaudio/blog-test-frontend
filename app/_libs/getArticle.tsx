export default async function getArticle(id: string, q?: object) {

  const qs = require('qs');
  const query = qs.stringify(
    q, { encodeValuesOnly: true, }
  );

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}?${query}`, {
    cache: 'no-cache'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await response.json()

  return data
}