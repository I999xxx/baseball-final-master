import '../styles/global.css'
import '@/scss/all.css'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import Rental from '@/components/rental/rental'
import Productlist from '@/components/productlist/productlist'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Productlist/>
      <Footer />
    </>
  )
}

export default MyApp
