export default async function getUsers(q?: object) {

  const qs = require('qs');
  const query = qs.stringify(
    q, { encodeValuesOnly: true, }
  );

  const response = await fetch(`http://127.0.0.1:1337/api/authors?${query}`, {
    cache: 'no-cache'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await response.json()

  return data
}