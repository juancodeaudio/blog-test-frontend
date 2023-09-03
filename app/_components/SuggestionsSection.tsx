'use client'
import { useState } from "react";

import {Image} from "@nextui-org/image";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import SectionContainer from "./SectionContainer";

import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from '@heroicons/react/24/outline'

import {Datum} from "../_types/types"

function formatMyDate(value: Date, locale = 'en-US'): string {
  const LocaleDateString = new Date(value).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return LocaleDateString
}

type Props = {
  data: Datum[]
}

const SuggestionsSection: React.FC<Props> = ({ data }) => {
  
  const [articleNumber, setArticleNumber] = useState(0)
  function getNextArticle() {
    if (articleNumber < data.length - 1) setArticleNumber(articleNumber + 1)
    else setArticleNumber(0)
  }
  function getLastArticle() {
    if (articleNumber > 0) setArticleNumber(articleNumber - 1)
    else setArticleNumber(data.length - 1)
  }
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
          <Link href={`/article/${data[articleNumber].id}`}>
            <Image
              width={780}
              height={450}
              className="object-cover"
              isZoomed
              isBlurred
              src={`http://127.0.0.1:1337${
                data[articleNumber].attributes.cover.data.attributes.formats?.large?.url
                ? data[articleNumber].attributes.cover.data.attributes.formats?.large?.url
                : data[articleNumber].attributes.cover.data.attributes.url
              }`}
              alt="NextUI hero Image"
            />
          </Link>
          <div className="absolute top-14 left-0 w-[500px]">
            <Link href={`/article/${data[articleNumber].id}`}>
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
                  >{data[articleNumber].attributes.category.data.attributes.name}</Chip>
                  <h4>{data[articleNumber].attributes.title}</h4>
                    <User   
                      name={data[articleNumber].attributes.author.data.attributes.name}
                      description={formatMyDate(data[articleNumber].attributes.createdAt)}
                      avatarProps={{
                        src: `http://127.0.0.1:1337${
                          data[articleNumber].attributes.author.data.attributes.avatar.data.attributes.formats?.thumbnail.url
                          ? data[articleNumber].attributes.author.data.attributes.avatar.data.attributes.formats?.thumbnail.url
                          : data[articleNumber].attributes.author.data.attributes.avatar.data.attributes.url
                        }`
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
                        {data[articleNumber].attributes.likes}
                      </Button>
                      <Button
                        variant="light"
                        size="sm"
                        radius="full"
                        color="success"
                        className="text-foreground hover:text-success"
                        startContent={<ChatBubbleLeftEllipsisIcon />}
                      >
                        113
                      </Button>
                    </div>
                    <Button isIconOnly radius="full" size="sm" variant="flat">
                      <BookmarkIcon className="h-5 w-5"/>
                    </Button>
                  </CardFooter>
              </Card>
            </Link>
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