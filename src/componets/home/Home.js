import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return(
    <section id="home">
      <div className=" main overflow-hidden align-middle my-3 py-5 text-center bg-light">
        <div className=" p-lg-5 mx-auto  text-center">
          <h1 className=" font-weight-normal logo">thereByte(<span className="text-style-1">)</span></h1>
          <p className="lead font-weight-normal tagLine">Rudy Thereze, sofware developer</p>
          <Link className="btn btn-outline-secondary my-4" to="/portafolio">Portafolio</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;