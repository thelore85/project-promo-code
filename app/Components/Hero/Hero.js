
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (

  <section id="hero" className="container-fluid d-flex align-items-center h-75 border-bottom bg-white">

    <div className="px-4 pt-5 my-5 text-center ">
      <h1 className="display-4 fw-bold text-body-emphasis"><span className="me-2"> <FontAwesomeIcon icon={faHouse} /></span>Centered screenshot</h1>
      <div className="col-lg-6 mx-auto">
        <p className="mb-4 fs-8">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  
  </section>



  )
}
