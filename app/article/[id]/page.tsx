import ArticleHeader from "../../_components/ArticleHeader"
import getArticle from "@/app/_libs/getArticle"

import { ArticlesDatum } from "@/app/_types/types"

type Props = {
  params: {
    id: string
  }
}

export default async function AuthorPage({params}: Props) {
  const articleQuery = {
    populate: {
      cover: true,
      category: true,
      author: {
        populate: ['avatar']
      }
    }
  }

  const articleData: ArticlesDatum = await getArticle(params.id, articleQuery)

  return (
    <main className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      <ArticleHeader data={articleData}  />
    </main>
  )
}