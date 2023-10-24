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
        <section id='hero' className="dark-bg min-vh-100 p-5 text-center d-flex justify-content-center align-items-center text-white">
          <div className="container">
   
            <div className="mb-5">
              <h1 className=" fw-bolder mb-2">Start your digital presence, now</h1>
              <p className=" lh-lg fw-lighter  mb-5">Gain customers and clients with online marketing campaigns</p>
              {/* <br />Sfrutta i canali digitali per raccogliere i contatti e attivarli con campagne mail.</p> */}
              <Link href="/">
                {/* <button className="btn btn-light border-primary text-primary me-2">Learn More</button> */}
              </Link>
              <Link href="/signup">
                <button className="btn btn-primary m-2">Go Online Now</button>
              </Link>
            </div>

            <div className=" rounded-5 p-2 m-auto" style={{'maxWidth':'300px', 'background':'rgb(0,0,0,0.4)'}}>
              <span className="fw-lighter small">SEO - ADV - WEBSITES - CONTENTS</span>
            </div>

          </div>
        </section>
      <Footer />
    </>
  )
}
