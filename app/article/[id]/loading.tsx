import SectionContainer from "@/app/_components/SectionContainer"
import { Skeleton } from "@nextui-org/skeleton"
import { Divider } from "@nextui-org/divider"

const loading = () => {
  return (
    <main className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      <SectionContainer className="flex flex-col gap-10 items-center">
        <div className="flex flex-col w-full max-w-4xl gap-4 items-center text-center" >
          <div className="flex flex-col h-28 w-full px-4 gap-3 items-center">
            <Skeleton className="w-4/5 rounded-full">
              <div className="h-10"></div>
            </Skeleton>
            <Skeleton className="w-3/5 rounded-full">
              <div className="h-10"></div>
            </Skeleton>
          </div>
          <div className="flex flex-col h-14 w-full px-4 gap-3 items-center">
            <Skeleton className="w-full rounded-full">
              <div className="h-5"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-full">
              <div className="h-5"></div>
            </Skeleton>
          </div>
        </div>
        <Divider className="w-full max-w-5xl" />
        <div className="flex justify-between w-full max-w-4xl">
          <div className="flex flex-row items-center justify-start gap-6">
            <div className="flex h-10 gap-2">
              <Skeleton className="w-10 h-10 rounded-full">
                <div className="w-5 h-5"></div>
              </Skeleton>
              <div className="flex flex-col justify-between h-10 py-1">
                <Skeleton className="w-28 rounded-full">
                  <div className="h-3"></div>
                </Skeleton>
                <Skeleton className="w-20 rounded-full">
                  <div className="h-3"></div>
                </Skeleton>
              </div>
            </div>
            <Skeleton className="w-10 h-6 rounded-full">
              <div></div>
            </Skeleton>
            <Skeleton className="w-28 h-6 rounded-full">
              <div></div>
            </Skeleton>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Skeleton className="w-14 h-8 rounded-full">
              <div></div>
            </Skeleton>
            <Skeleton className="w-8 h-8 rounded-full">
              <div></div>
            </Skeleton>
            <Skeleton className="w-8 h-8 rounded-full">
              <div></div>
            </Skeleton>
          </div>
        </div>
        <Skeleton className="w-full max-w-6xl h-96 rounded-3xl mt-10">
          <div></div>
        </Skeleton>
      </SectionContainer>
    </main>
  )
}

export default loading