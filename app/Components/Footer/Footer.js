import './Footer.css'


export default function Footer() {
  return (
    <section id='footer'>
      <div className="wrapper">

      <div className="logo-container">
        <img className="logo" alt="TOW" src="/img/logo.jpg"></img>
      </div>

        <div className="footer-menu">
          <p>ADMIN - <a href="/privacy">PRIVACY POLICY</a> - <a href="/termini">TERMINI DEL SERVIZIO</a></p>
        </div>

        <div className="legal-line">
          <p>TOW.srl è il Cliente Sponsorizzato e non è responsabile della gestione diretta dei dati raccolti dagli Utenti. <br />Per informazioni sulla gestione dei dati e sulla privacy, si prega di contattare il Titolare del Sito.</p>
        </div>

      </div>
    </section>
  )
}
