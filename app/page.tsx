import SuggestionsSection from "./components/SuggestionsSection"
import NewestAuthorsSection from "./components/NewestAuthorsSection"

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      <SuggestionsSection />
      <NewestAuthorsSection />
    </main>
  )
}
