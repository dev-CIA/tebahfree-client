import { Header, SectionButtons } from './_components'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[3.75rem] flex min-h-screen flex-col items-center">
        <SectionButtons />
      </main>
    </>
  )
}
