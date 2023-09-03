import { getArticles } from "./_libs/getArticles"
import { getUsers } from "./_libs/getUsers"
import SuggestionsSection from "./_components/SuggestionsSection"
import NewestAuthorsSection from "./_components/NewestAuthorsSection"
import LatestSection from "./_components/LatestSection"

export default async function Home() {
  const usersQuery = {
    populate: {
      avatar: {
        fields: ['url', 'formats']
      },
      articles: {
        fields: ['slug']
      },
      background: {
        fields: ['url', 'formats']
      }
    },
    fields: ['name', 'username']
  }
  const suggestedArticlesQuery = {
    sort: ['createdAt:desc'],
    filters: {
      recommended: {
        $eq: true,
      },
    },
    populate: {
      cover: {
        fields: ['url', 'formats']
      },
      category: {
        fields: ['name']
      },
      author: {
        fields: ['name'],
        populate: ['avatar']
      }
    },
    fields: [
      'title', 'likes', 'createdAt'
    ]
  }
  const latestArticlesQuery = {
    sort: ['createdAt:desc'],
    populate: {
      cover: {
        fields: ['url', 'formats']
      },
      category: {
        fields: ['name']
      },
      author: {
        fields: ['name'],
        populate: ['avatar']
      }
    },
    fields: [
      'title', 'description', 'likes', 'createdAt'
    ]
  }

  const suggestedArticles = await getArticles(suggestedArticlesQuery)
  const latestArticles = await getArticles(latestArticlesQuery)
  const users = await getUsers(usersQuery)
  return (
    <main className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      <SuggestionsSection data={suggestedArticles} />
      <NewestAuthorsSection data={users} />
      <LatestSection data={latestArticles} />
    </main>
  )
}
