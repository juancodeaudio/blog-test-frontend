'use client'
import Link from "next/link"
import SectionContainer from "../_components/SectionContainer"
import { Divider } from "@nextui-org/divider"
import { User } from "@nextui-org/user"
import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"
import Image from "next/image"
import { HeartIcon, BookmarkIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

import { ArticlesDatum } from "../_types/types"

type Props = {
  data: ArticlesDatum
}

function formatMyDate(value: Date, locale = 'en-US'): string {
  const LocaleDateString = new Date(value).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return LocaleDateString
}

const ArticleHeader: React.FC<Props> = ({ data }) => {
  return (
    <SectionContainer className="flex flex-col gap-10 items-center">
      <div className="flex flex-col w-full max-w-4xl gap-4 items-center text-center" >
        <h1>{data.attributes.title}</h1>
        <p className="text-foreground/40">{data.attributes.description}</p>
      </div>
      <Divider className="w-full max-w-5xl" />
      <div className="flex w-full justify-between max-w-4xl">
        <div className="flex items-center gap-6">
          <Link href={`/author/${data.attributes.author.data.id}`}>
            <User   
              name={data.attributes.author.data.attributes.name}
              description={formatMyDate(data.attributes.createdAt)}
              avatarProps={{
                src: `${data.attributes.author.data.attributes.avatar.data.attributes.url}`
              }}
            />
          </Link>
          <Chip
            color="danger"
            variant="flat"
            classNames={{
              base: "h-6",
              content: "text-xs",
            }}
          >
            {data.attributes.category.data.attributes.name}
          </Chip>
          <span>2 min read</span>
        </div>
        <div className="flex items-center gap-4">
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
          <Button isIconOnly radius="full" size="sm" variant="flat">
            <BookmarkIcon className="h-5 w-5"/>
          </Button>
          <Button
            isIconOnly
            radius="full"
            variant="light"
            startContent={<EllipsisHorizontalIcon className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="w-full max-w-6xl h-[70vh] overflow-hidden rounded-3xl mt-8">
        <Image 
          src={data.attributes.cover.data.attributes.url}
          alt="Article Cover Image"
          width={1200}
          height={500}
        />
      </div>
    </SectionContainer>
  )
}

export default ArticleHeader