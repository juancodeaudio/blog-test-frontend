import { Spinner } from "@nextui-org/spinner"

const loading = () => {
  return (
    <main className='absolute inset-0 w-full h-screen bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center'>
      <Spinner
        classNames={{
          wrapper: 'h-20 w-20'
        }}
       />
    </main>
  )
}

export default loading