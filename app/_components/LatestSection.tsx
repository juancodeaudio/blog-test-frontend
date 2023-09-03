'use client'
import Link from "next/link"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { User } from "@nextui-org/user"
import { Tabs, Tab } from "@nextui-org/tabs"
import { Chip } from "@nextui-org/chip"
import { HeartIcon, BookmarkIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline"
import SectionContainer from "./SectionContainer"
import ArticleCard from "./ArticleCard"

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

const LatestSection: React.FC<Props> = ({ data }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col max-w-6xl justify-between m-auto">
        <div className="relative flex flex-col">  
          <h2>Latest Articles</h2>
          <span className="mt-2 md:mt-3 font-normal block text-xl text-neutral-500 dark:text-neutral-400">
            Discover the most outstanding articles in all topics of life.
          </span>
        </div>
        <div className="mt-10">
          <Tabs
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
            <Tab key="all" title="All Items"/>
            <Tab key="garden" title="Garden"/>
            <Tab key="fitness" title="Fitness"/>
            <Tab key="design" title="Design"/>
          </Tabs>
        </div>
        <div className="flex w-full gap-8 mt-10">
          <Link href="/article" className="w-1/2">
            <Card className="w-full h-full bg-transparent shadow-none" shadow="none">
              <CardHeader className="p-0 h-1/2">
                <div className="w-full">
                  <Image
                    alt="Album cover"
                    className="object-cover rounded-2xl"
                    height="full"
                    width="full"
                    src={`http://127.0.0.1:1337${data[data.length-1].attributes.cover.data.attributes.url}`}
                  />
                </div>
              </CardHeader>
              <CardBody className="flex flex-col items-start gap-4 mt-2">
                <User   
                  name={data[0].attributes.author.data.attributes.name}
                  description={formatMyDate(data[data.length-1].attributes.createdAt)}
                  avatarProps={{
                    src: `http://127.0.0.1:1337${data[0].attributes.author.data.attributes.avatar.data.attributes.url}`
                  }}
                />
                <h4>{data[0].attributes.title}</h4>
                <p>{data[0].attributes.description}</p>
              </CardBody>
              <CardFooter className="flex justify-between p-2">
              <div className="flex justify-center gap-4">
                <Button
                  variant="light"
                  size="sm"
                  radius="full"
                  color="danger"
                  className="text-foreground hover:text-danger"
                  startContent={<HeartIcon />}
                >
                  {data[0].attributes.likes}
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
          <div className="flex flex-col gap-8">
            <Link href="/article" ><ArticleCard data={data[1]} /></Link>
            <Link href="/article" ><ArticleCard data={data[2]} /></Link>
            <Link href="/article" ><ArticleCard data={data[3]} /></Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default LatestSection