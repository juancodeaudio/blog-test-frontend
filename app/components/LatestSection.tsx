'use client'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { User } from "@nextui-org/user"
import { Tabs, Tab } from "@nextui-org/tabs"
import { Chip } from "@nextui-org/chip"
import { HeartIcon, BookmarkIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline"
import SectionContainer from "./SectionContainer"
import ArticleCard from "./ArticleCard"

const LatestSection = () => {
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
          <Card className="w-1/2 bg-transparent shadow-none" shadow="none">
            <CardHeader className="p-0">
            <div className="w-full">
              <Image
                alt="Album cover"
                className="object-cover rounded-2xl"
                height="full"
                width="full"
                src="/images/image1.jpg"
              />
            </div>
            </CardHeader>
            <CardBody className="flex flex-col items-start gap-4 mt-2">
              <User   
                name="Pillifant Vern"
                description="May 20, 2021"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
              />
              <h4>Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Repellat ea eveniet veritatis nesciunt tempora veniam sapiente accusantium nam ipsa nostrum, debitis dicta? Temporibus minus ab molestiae tempora consequuntur.</p>
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
          </Card>
          <div className="flex flex-col gap-8">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default LatestSection