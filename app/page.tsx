import getArticles from "./_libs/getArticles"
import getUsers from "./_libs/getUsers"
import SuggestionsSection from "./_components/SuggestionsSection"
import NewestAuthorsSection from "./_components/NewestAuthorsSection"
import LatestSection from "./_components/LatestSection"
import SectionContainer from "./_components/SectionContainer"
import { Skeleton } from "@nextui-org/skeleton"
import { Suspense } from "react"

const LoadingSuggestions: React.FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col max-w-6xl justify-between m-auto">
        <div className="relative flex flex-col">  
          <h2>Editor’s pick</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding data in all topics of life.
          </span>
        </div>
        <div className="relative w-full flex justify-end mt-10">
          <Skeleton className="w-[780px] h-[520px] rounded-lg">
            <div className="w-[780px] h-[450px] bg-foreground/10">S</div>
          </Skeleton>
          <div className="absolute top-14 left-0 w-[500px]">
            <div className="border-none bg-background/40 dark:bg-default-100/40 backdrop-blur-md h-[300px] z-[999] p-8 rounded-xl">
              <div className="flex flex-col items-start justify-between p-0">
                <Skeleton className="h-6 w-12 rounded-full">
                  <div className="h-6 w-12"></div>
                </Skeleton>
                <Skeleton className="h-6 w-full rounded-full mt-8">
                  <div className="h-6 w-full mt-8">S</div>
                </Skeleton>
                <Skeleton className="h-6 w-1/3 rounded-full mt-1">
                  <div className="h-6 w-1/3 mt-8">S</div>
                </Skeleton>
                <div className="flex h-10 w-full gap-2 mt-7">
                    <Skeleton className="w-10 h-10 rounded-full">
                      <div className="w-5 h-5"></div>
                    </Skeleton>
                    <div className="flex flex-col justify-between h-10 py-1">
                      <Skeleton className="w-28 rounded-full">
                        <div className="h-3"></div>
                      </Skeleton>
                      <Skeleton className="w-20 rounded-full">
                        <div className="h-3"></div>
                      </Skeleton>
                    </div>
                  </div>
              </div>
              <div className="flex justify-between p-0 mt-5">
                <div className="flex justify-center gap-4 mt-2">
                  <Skeleton className="h-8 w-16 rounded-full">
                    <div className="h-8 w-16"></div>
                  </Skeleton>
                  <Skeleton className="h-8 w-16 rounded-full">
                    <div className="h-8 w-16"></div>
                  </Skeleton>
                </div>
                <Skeleton className="h-8 w-8 rounded-full">
                  <div className="h-8 w-8"></div>
                </Skeleton>
              </div>
            </div>
            <div className="flex pt-8 px-10">
              <div className="h-10 w-10 rounded-full border-2 border-foreground/20 mr-4"></div>
              <div className="h-10 w-10 rounded-full border-2 border-foreground/20 mr-4"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
const LoadingAuthors: React.FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col max-w-7xl m-auto bg-neutral-200 dark:bg-neutral-950 rounded-3xl p-10 items-center gap-10">
        <div className="flex flex-col items-center">  
          <h2>Newest authors</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            Say hello to future creator potentials
          </span>
        </div>
        <div className="flex gap-6 w-full overflow-scroll">
          <Skeleton className="w-[220px] h-[290px] rounded-2xl">
            <div className="w-[220px] h-[290px]"></div>
          </Skeleton>
          <Skeleton className="w-[220px] h-[290px] rounded-2xl">
            <div className="w-[220px] h-[290px]"></div>
          </Skeleton>
          <Skeleton className="w-[220px] h-[290px] rounded-2xl">
            <div className="w-[220px] h-[290px]"></div>
          </Skeleton>
          <Skeleton className="w-[220px] h-[290px] rounded-2xl">
            <div className="w-[220px] h-[290px]"></div>
          </Skeleton>
          <Skeleton className="w-[220px] h-[290px] rounded-2xl">
            <div className="w-[220px] h-[290px]"></div>
          </Skeleton>
        </div>
      </div>
    </SectionContainer>
  )
}
const LoadingLatest: React.FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col max-w-6xl justify-between m-auto">
        <div className="relative flex flex-col">  
          <h2>Latest Articles</h2>
          <span className="mt-2 md:mt-3 font-normal block text-xl text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding articles in all topics of life.
          </span>
        </div>
      </div>
    </SectionContainer>
  )
}


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
      <Suspense fallback={<LoadingSuggestions />}>
        <SuggestionsSection data={suggestedArticles} />
      </Suspense>
      <Suspense fallback={<LoadingAuthors />}>
        <NewestAuthorsSection data={users} />
      </Suspense>
      <Suspense fallback={<LoadingLatest />}>
        <LatestSection data={latestArticles} />
      </Suspense>
    </main>
  )
}
