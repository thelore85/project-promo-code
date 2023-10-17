import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-5 px-3 w-100">
      <div className="container text-center">

        <div className="legal-line fs-6 text-white-50 fw-lighter">
          <p className=" fw-medium text-white">Piqus Lead - Potenzia il tuo Marketing</p>
          <p>Il Cliente o Brand sponsorizzato non è responsabile della gestione diretta dei dati raccolti.
          <br /> Per informazioni sulla gestione dei dati e sulla privacy, si prega di contattare il Titolare del Sito.</p>
        </div>


        <div className="footer-menu">
          <p className="fs-6  fw-lighter text-white">
            <Link href="/login">LOGIN - </Link>
            <Link href="/privacy">PRIVACY - </Link>
            <Link href="/terms">CONDIZIONI</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
