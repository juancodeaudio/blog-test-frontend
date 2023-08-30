import SectionContainer from "./SectionContainer"
import { Card, CardHeader, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { Avatar } from "@nextui-org/avatar";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

const authors = [
  {
    name: 'Truelock Alric',
    user: '@truelockauthor',
    articles: 34,
    photo: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    background: 'image1.jpg'
  },
  {
    name: 'Birrel Chariot',
    user: '@truelockauthor',
    articles: 110,
    photo: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    background: 'image2.jpg'
  },
  {
    name: 'Foulcher Nathanil',
    user: '@truelockauthor',
    articles: 20,
    photo: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    background: 'image3.jpg'
  },
  {
    name: 'Truelock Alric',
    user: '@truelockauthor',
    articles: 55,
    photo: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    background: 'image1.jpg'
  },
  {
    name: 'Truelock Alric',
    user: '@truelockauthor',
    articles: 76,
    photo: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    background: 'image1.jpg'
  },
  {
    name: 'Truelock Alric',
    user: '@truelockauthor',
    articles: 15,
    photo: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    background: 'image1.jpg'
  },
  {
    name: 'Truelock Alric',
    user: '@truelockauthor',
    articles: 28,
    photo: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    background: 'image1.jpg'
  }
]

const NewestAuthorsSection = () => {
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
          {
            authors.map((author) => (
              <Card key={author.name} isFooterBlurred className="min-w-[220px] w-[220px] h-[290px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <Button
                    size="sm"
                    radius="full"
                    className="bg-background"
                    endContent={<ArrowSmallRightIcon color="orange" />}
                  >{author.articles}</Button>
                </CardHeader>
                <Image
                  isZoomed
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={`/images/${author.background}`}
                />
                <CardFooter className="absolute flex flex-col bg-background/60 bottom-0 z-10 h-1/2 overflow-visible">
                  <Avatar src={author.photo} isBordered className="absolute -top-10 w-20 h-20 text-large" />
                  <div className="flex flex-col m-auto">
                    <p className="text-lg text-foreground/80 text-center">{author.name}</p>
                    <p className="text-tiny text-foreground/60 text-center">{author.user}</p>
                  </div>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
    </SectionContainer>
  )
}

export default NewestAuthorsSection