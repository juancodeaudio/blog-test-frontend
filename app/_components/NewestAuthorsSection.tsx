import SectionContainer from "./SectionContainer"
import { Card, CardHeader, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { Avatar } from "@nextui-org/avatar";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

import { AuthorDatum } from "../_types/types"

type Props = {
  data: AuthorDatum[]
}

const NewestAuthorsSection: React.FC<Props> = ({ data }) => {
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
            data.map(({id, attributes}) => (
              <Link  key={id} href={`/author/${id}`}>
                <Card isFooterBlurred className="min-w-[220px] w-[220px] h-[290px] col-span-12 sm:col-span-7">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <Button
                      size="sm"
                      radius="full"
                      className="bg-background"
                      endContent={<ArrowSmallRightIcon color="orange" />}
                    >
                      {(attributes.articles.data).length}
                    </Button>
                  </CardHeader>
                  <Image
                    isZoomed
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={`http://127.0.0.1:1337${
                      attributes.background.data.attributes.formats?.medium.url
                      ? attributes.background.data.attributes.formats?.medium.url
                      : attributes.background.data.attributes.url
                    }`}
                  />
                  <CardFooter className="absolute flex flex-col bg-background/60 bottom-0 z-10 h-1/2 overflow-visible">
                    <Avatar
                      src={`http://127.0.0.1:1337${
                        attributes.avatar.data.attributes.formats?.small.url
                        ? attributes.avatar.data.attributes.formats?.small.url
                        : attributes.avatar.data.attributes.url
                      }`}
                      // src={photo}
                      isBordered
                      className="absolute -top-10 w-20 h-20 text-large"
                    />
                    <div className="flex flex-col m-auto">
                      <p className="text-lg text-foreground/80 text-center">
                        {attributes.name}
                      </p>
                      <p className="text-tiny text-foreground/60 text-center">
                        {`@${attributes.username}`}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
    </SectionContainer>
  )
}

export default NewestAuthorsSection