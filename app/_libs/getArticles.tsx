

export async function getArticles(q: object) {

  const qs = require('qs');
  const query = qs.stringify(
    q, { encodeValuesOnly: true, }
  );

  const response = await fetch(`http://127.0.0.1:1337/api/articles?${query}`, {
    cache: 'no-cache'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await response.json()

  return data
}