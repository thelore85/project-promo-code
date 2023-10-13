import Hero from '@/app/(pages)/tow/Components/Hero/Hero.js'
import Main from '@/app/(pages)/tow/Components/Main/Main.js'
import Form from '@/app/(pages)/tow/Components/Form/Form.js'
import Carousel from '@/app/(pages)/tow/Components/Carousel/Carousel.js';
import Footer from '@/app/(pages)/tow/Components/Footer/Footer.js'

export const metadata = {
  title: 'TOW - The Odd Wine - Milano',
  description: 'Vino - Bistrot - Tapas',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

export default function promo() {
  return (
        <>
          <Hero />
          <Main />
          <Form />
          <Carousel />
          <Footer />
        </>
  )
}
