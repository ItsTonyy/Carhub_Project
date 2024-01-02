import { Hero, Navbar, Footer, CarCatalogue } from '../components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <CarCatalogue />
      <Footer />
    </main>
  )
}
