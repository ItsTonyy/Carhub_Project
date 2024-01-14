import { Hero, Navbar, Footer, CarCatalogue } from '../components'
import { HomeProps } from '../types'

export default async function Home({searchParams}: HomeProps) {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <CarCatalogue searchParams={searchParams}/>
      <Footer />
    </main>
  )
}
