'use client'
import {Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from '@heroicons/react/24/outline'


const suggestedArticles = [
  {
    image: 'image1.jpg',
    title: 'DIYer and TV host Trisha Hershberger’s journey through',
    author: 'Falconar Agnes',
    date: 'May 20, 2023',
    likes: 34,
    comments: 110
  },
  {
    image: 'image2.jpg',
    title: 'Lenovo’s smarter devices stoke professional passions',
    author: 'Foulcher Nathanil',
    date: 'Jun 13, 2023',
    likes: 22,
    comments: 98
  },
  {
    image: 'image3.jpg',
    title: 'How AI and Teams are benefitting the littlest of patients',
    author: 'Foulcher Nathanil',
    date: 'Apr 10, 2023',
    likes: 22,
    comments: 98
  }
]

const SuggestionsSection = () => {
  const [articleNumber, setArticleNumber] = useState(0)
  function getNextArticle() {
    if (articleNumber < suggestedArticles.length - 1) setArticleNumber(articleNumber + 1)
    else setArticleNumber(0)
  }
  function getLastArticle() {
    if (articleNumber > 0) setArticleNumber(articleNumber - 1)
    else setArticleNumber(suggestedArticles.length - 1)
  }
  return (
    <SectionContainer>
      <div className="flex flex-col max-w-6xl justify-between m-auto">
        <div className="relative flex flex-col">  
          <h2>Editor’s pick</h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding articles in all topics of life.
          </span>
        </div>
        <div className="relative w-full flex justify-end mt-10">
          <Image
            width={780}
            height={450}
            className="object-cover"
            isZoomed
            isBlurred
            src={`/images/${suggestedArticles[articleNumber].image}`}
            alt="NextUI hero Image"
          />
          <div className="absolute top-14 left-0 w-[500px]">
            <Card
              isBlurred
              className="border-none bg-background/40 dark:bg-default-100/40 backdrop-blur-md h-[300px] z-[999] p-8"
              shadow="md"
            >
              <CardBody className="flex flex-col items-start justify-between p-0">
                <Chip color="danger" variant="flat"
                classNames={{
                  base: "h-6",
                  content: "text-xs",
                }}
                >Tools</Chip>
                <h4>{suggestedArticles[articleNumber].title}</h4>
                <User   
                  name={suggestedArticles[articleNumber].author}
                  description={suggestedArticles[articleNumber].date}
                  avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                  }}
                />
              </CardBody>
                <CardFooter className="flex justify-between p-0 mt-5">
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="light"
                      size="sm"
                      radius="full"
                      color="danger"
                      className="text-foreground hover:text-danger"
                      startContent={<HeartIcon />}
                    >
                      {suggestedArticles[articleNumber].likes}
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      radius="full"
                      color="success"
                      className="text-foreground hover:text-success"
                      startContent={<ChatBubbleLeftEllipsisIcon />}
                    >
                      {suggestedArticles[articleNumber].comments}
                    </Button>
                  </div>
                  <Button isIconOnly radius="full" size="sm" variant="flat">
                    <BookmarkIcon className="h-5 w-5"/>
                  </Button>
                </CardFooter>
            </Card>
            <div className="pt-8 px-10">
              <Button isIconOnly radius="full" variant="bordered" onClick={getLastArticle} className="mr-4">
                <ArrowSmallLeftIcon className="h-4 w-4" />
              </Button>
              <Button isIconOnly radius="full" variant="bordered" onClick={getNextArticle}>
                <ArrowSmallRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default SuggestionsSection