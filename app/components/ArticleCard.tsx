import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import { User } from "@nextui-org/user"
import { Button } from "@nextui-org/button"
import { HeartIcon, ChatBubbleLeftEllipsisIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'

const ArticleCard = () => {
  return (
    <Card
      isBlurred
      className="bg-background max-w-[610px] h-[220px]"
      shadow="sm"
    >
      <div className="flex gap-4 items-center justify-center">
        <div className="flex flex-col col-span-8 m-5 items-start gap-2">
          <Chip color="danger" variant="flat"
          classNames={{
            base: "h-6",
            content: "text-xs",
          }}
          >Tools</Chip>
          <h5>360-degree video: How Microsoft deployed a...</h5>
          <User   
            name="Pillifant Vern"
            description="May 20, 2021"
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
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
                11
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
        <div className="relative col-span-4 mr-4">
          <Image
            alt="Album cover"
            className="object-cover rounded-md h-[180px]"
            height="300"
            width="300"
            src="/images/image1.jpg"
          />
        </div>
      </div>
    </Card>
  )
}

export default ArticleCard