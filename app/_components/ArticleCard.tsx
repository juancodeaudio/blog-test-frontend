import { Card, CardFooter } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import { User } from "@nextui-org/user"
import { Button } from "@nextui-org/button"
import { HeartIcon, ChatBubbleLeftEllipsisIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import {Image} from '@nextui-org/image'

import {Datum} from "../_types/types"

type Props = {
  data: Datum
}

const ArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <Card
      isBlurred
      className="bg-background max-w-[610px] h-[220px]"
      shadow="sm"
    >
      <div className="flex gap-4 h-full items-center justify-center">
        <div className="flex flex-col h-full w-3/5 col-span-8 p-5 items-start justify-between">
          <Chip color="danger" variant="flat"
          classNames={{
            base: "h-6",
            content: "text-xs",
          }}
          >{data.attributes.category.data.attributes.name}</Chip>
          <h5>{data.attributes.title}</h5>
          <User   
            name={data.attributes.author.data.attributes.name}
            description="May 20, 2021"
            avatarProps={{
              src: `${data.attributes.author.data.attributes.avatar.data.attributes.url}`
            }}
          />
          <CardFooter className="flex justify-between p-0">
            <div className="flex justify-center gap-4">
              <Button
                variant="light"
                size="sm"
                radius="full"
                color="danger"
                className="text-foreground hover:text-danger"
                startContent={<HeartIcon />}
              >
                {data.attributes.likes}
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
        </div>
          <Image
            alt="Album cover"
            classNames={{
              img: "object-cover h-full w-full",
              wrapper: "h-[180px] w-[180px] justify-center"
            }}
            className="rounded-md"
            height={300}
            width={300}
            src={data.attributes.cover.data.attributes.url}
          />

      </div>
    </Card>
  )
}

export default ArticleCard