import { Tab, Tabs } from "@nextui-org/tabs"
import SectionContainer from "../../_components/SectionContainer"
import AuthorBackground from "@/app/_components/AuthorBackground"
import AuthorCard from "../../_components/AuthorCard"
import SmallArticleCard from "@/app/_components/SmallArticleCard"

import getUser from "@/app/_libs/getUser"

import { AuthorDatum, ArticlesDatum } from "@/app/_types/types"

type Props = {
  params: {
    id: string
  }
}

export default async function AuthorPage({params}: Props) {
  const usersQuery = {
    populate: {
      avatar: {
        populate: ['formats'],
        fields: ['url', 'formats']
      },
      articles: {
        populate: ['cover'],
        fields: ['title', 'createdAt', 'likes']
      },
      background: {
        fields: ['url', 'formats']
      }
    },
    fields: [
      'name', 'website', 'biography', 'username'
    ]
  }

  const userData: AuthorDatum = await getUser(params.id, usersQuery)
  const articles = userData.attributes.articles.data

  return (
    <div className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      <AuthorBackground data={userData} />
      <SectionContainer className="relative mt-64">
        <div className="flex flex-col max-w-7xl justify-between m-auto relative">
          <AuthorCard data={userData} />
          <div className="mt-48 h-20">
            {/* <Tabs
              variant="light"
              radius="full"
              size="lg"
              classNames={{
                tabList: "gap-10",
                cursor: "w-full bg-foreground",
                tab: "max-w-fit px-5 h-12",
                tabContent: "group-data-[selected=true]:text-background dark:group-data-[selected=true]:text-white text-lg"
              }}
            >
              <Tab key="articles" title="Articles"/>
              <Tab key="favorites" title="Favorites"/>
              <Tab key="saved" title="Saved"/>
            </Tabs> */}
          </div>
          <div className="grid grid-cols-4 gap-10">
            {articles.map((article: ArticlesDatum) => (
              <div key={article.id} >
                <SmallArticleCard
                  article={article}
                  userName={userData.attributes.name}
                  userAvatar={userData.attributes.avatar.data.attributes.url}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}