import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Hero.css';

export default function Home() {
  return (
  <section id="hero" className="container-fluid d-flex">
    <div className="hero-wrapper">
      
      <div className="logo-container">
        <img className="logo" alt="TOW" src="/img/tow/logo.jpg"></img>
      </div>
      <div className="icon">
        <span className='brand'>the odd wine</span>
        <a href="#main"><FontAwesomeIcon icon={faChevronDown} beat /></a>
      </div>

    </div>

  </section>
  )
}
