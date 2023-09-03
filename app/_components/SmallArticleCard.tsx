import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { User } from "@nextui-org/user"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import Link from "next/link"

import { BookmarkIcon, ChatBubbleLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline"

import { ArticlesDatum } from "../_types/types"

type Props = {
  article: ArticlesDatum;
  userName: string;
  userAvatar: string;
}

function formatMyDate(value: Date, locale = 'en-US'): string {
  const LocaleDateString = new Date(value).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return LocaleDateString
}

const SmallArticleCard: React.FC<Props> = ({ article, userName, userAvatar }) => {
  return (
    <Link href="/article">
      <Card className="w-72 h-96 justify-self-center">
        <CardHeader className="w-full h-1/2 overflow-hidden p-0">
          <Image
            alt="Album cover"
            className="object-cover"
            height="full"
            src={`http://127.0.0.1:1337${
              article.attributes.cover.data.attributes.formats.small.url
              ? article.attributes.cover.data.attributes.formats.small.url
              : article.attributes.cover.data.attributes.url
            }`}
          />
        </CardHeader>
        <CardBody className="flex flex-col items-start h-full justify-between">
          <User   
            name={userName}
            description={formatMyDate(article.attributes.createdAt)}
            avatarProps={{
              src: `http://127.0.0.1:1337${userAvatar}`
            }}
          />
          <h6 className="font-semibold">{article.attributes.title}</h6>
        </CardBody>
        <CardFooter className="flex justify-between p-4 pb-5">
          <div className="flex justify-center gap-4">
            <Button
              variant="light"
              size="sm"
              radius="full"
              color="danger"
              className="text-foreground hover:text-danger"
              startContent={<HeartIcon />}
            >
              {article.attributes.likes}
            </Button>
            <Button
              variant="light"
              size="sm"
              radius="full"
              color="success"
              className="text-foreground hover:text-success"
              startContent={<ChatBubbleLeftEllipsisIcon />}
            >
              76
            </Button>
          </div>
          <Button isIconOnly radius="full" size="sm" variant="flat">
            <BookmarkIcon className="h-5 w-5"/>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default SmallArticleCard