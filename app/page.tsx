import { Hero, Navbar, Footer, CarCatalogue } from '../components'

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <CarCatalogue />
      <Footer />
    </main>
  )
}
