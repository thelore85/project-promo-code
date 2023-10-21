import Link from 'next/link'

// comeponents
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar';


export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Crea la tua promo online, gratis! - PIQUS LEAD',
  description: 'Inizia con una landing page promozianel in grado di cerare un codice sconto',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

export default async function lead() {

  return (
    <>
        <Navbar />
        <main className="container h-75 p-5 text-center d-flex justify-content-center align-items-center ">
          <div>
            <h1 className=" fw-bolder ">Realizziamo promozioni per i tuoi clienti</h1>
            <p className=" fs-5">Aumenta le tue vendite con una promozione offline o online.
            <br />Sfrutta i canali digitali per raccogliere i contatti e attivarli con campagne mail.</p>
            <Link href="/">
              <button className="btn btn-secondary m-2">Scopri Di Più</button>
            </Link>
            <Link href="/signup">
              <button className="btn btn-primary m-2">La Tua Promo Gratis</button>
            </Link>

          </div>
        </main>
      <Footer />
    </>
  )
}
