import Hero from '@/app/Components/Hero/Hero.js'
import Main from '@/app/Components/Main/Main.js'
import Form from '@/app/Components/Form/Form.js'
import Carousel from '@/app/Components/Carousel/Carousel.js';

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
        </>
  )
}
