import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal"
import { Input } from "@nextui-org/input"
import { SearchIcon } from "./icons"
import { Divider } from "@nextui-org/divider"
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox"
import { DocumentTextIcon } from "@heroicons/react/24/solid"
import { DocumentMagnifyingGlassIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Avatar } from "@nextui-org/avatar"
import { Spinner } from "@nextui-org/spinner"
import { useRouter } from 'next/navigation'

import { useState, useEffect } from "react"

import { ArticlesDatum, AuthorDatum } from "../_types/types"

type Props = {
  isOpen: boolean;
  onOpenChange: any;
  onClose: any;
}

const SearchModal: React.FC<Props> = ({isOpen, onOpenChange, onClose}) => {
  const router = useRouter()

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFilteredArticles = async () => {
      const response = await fetch(`/api/articles?query=${query}`);
      const articles = await response.json();
      setArticles(articles)
      setIsLoading(false)
    }
    if(query !== '') {
      getFilteredArticles();
    } else {
      setArticles([]);
      setIsLoading(false)
    }
  }, [query])

  useEffect(() => {
    const getFilteredAuthors = async () => {
      const response = await fetch(`/api/authors?query=${query}`);
      const authors = await response.json();
      setAuthors(authors)
      setIsLoading(false)
    }
    if(query !== '') {
      getFilteredAuthors();
    } else {
      setAuthors([]);
      setIsLoading(false)
    }
  }, [query])

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="z-[999]"
      classNames={{
        base: ["overflow-hidden", "max-h-[500px]", "min-h-[500px]"]
      }}
      hideCloseButton
      size="xl"
      scrollBehavior="inside"
    >
      <ModalContent>
      {(onClose) => (
        <>
        <ModalHeader className="p-0">
          <Input
            type="email"
            placeholder="Search..."
            startContent={<SearchIcon size={48} />}
            autoFocus
            radius="none"
            isClearable
            size="lg"
            classNames={{
              input: ["ml-2"],
              inputWrapper: ["border-none", "!cursor-text", "h-16", "bg-transparent", "px-6"],
              clearButton: ["mr-1"]
            }}
            value={query}
            onValueChange={(value: string) => {
              setQuery(value)
              setIsLoading(true)
            }}
          />
        </ModalHeader>
        <Divider />
        <ModalBody>
          {
            query !== ''
            ? <Listbox variant="flat" aria-label="Listbox menu with sections" className="p-0" onAction={onClose}>
            <ListboxSection title="Articles" showDivider> 
              {articles.map((article: ArticlesDatum) => (
                <ListboxItem
                  key={article.id}
                  description="tech"
                  startContent={<DocumentTextIcon className="w-6 h-6 text-success" />}
                  endContent={<ChevronRightIcon className="w-6 h-6" />}
                  className="h-16"
                  onPress={() => router.push(`/article/${article.id}`)}
                >
                  {article.attributes.title}
                </ListboxItem>
              ))}
            </ListboxSection> 
            <ListboxSection title="Authors">  
                {authors.map((author: AuthorDatum) => (
                  <ListboxItem
                    key={author.id}
                    startContent={<Avatar src={author.attributes.avatar.data.attributes.url} size="sm" className="mr-1" />}
                    endContent={<ChevronRightIcon className="w-6 h-6" />}
                    className="h-16"
                    onPress={() => router.push(`/author/${author.id}`)}
                  >
                    {author.attributes.name}
                  </ListboxItem>
                ))}
            </ListboxSection> 
            {/* <ListboxSection title="Categories">  
            <ListboxItem
                key="new"
                startContent={<FolderIcon className="w-6 h-6 opacity-50" />}
              >
                First Category
              </ListboxItem>
              <ListboxItem
                key="copy"
                startContent={<FolderIcon className="w-6 h-6 opacity-50" />}
              >
                Second Category
              </ListboxItem>
              <ListboxItem
                key="edit"
                startContent={<FolderIcon className="w-6 h-6 opacity-50" />}
              >
                Third Category
              </ListboxItem>
            </ListboxSection>  */}
          </Listbox>
          : <div className="h-80 flex flex-col justify-center items-center">
            <DocumentMagnifyingGlassIcon className="h-16 w-16 text-foreground/40"/>
            <h4 className="my-4">Looking for something?</h4>
            <p className="text-foreground/40">Start typing to see results...</p>
          </div>
          }
          {
            isLoading &&
            <div className="absolute inset-0 flex justify-center items-center">
              <Spinner size="lg" />
            </div>
          }
        </ModalBody>
        </>
      )}
      </ModalContent>
    </Modal>
  )
}

export default SearchModal