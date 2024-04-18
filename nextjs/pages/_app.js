import '../styles/global.css'
import '@/scss/all.css'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import Rental from '@/components/rental/rental'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Rental/>
      <Footer />
    </>
  )
}

export default MyApp
