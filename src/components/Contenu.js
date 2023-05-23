import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Contenu() {
  return (
    <div className='body'>
    <div className='main' style={{ backgroundImage:`url(https://www.plex.tv/wp-content/uploads/2023/03/hero-variant-desktop-2048x1084.png)`,
    width:'100%', height:'1000px', backgroundSize: "contain",
    backgroundRepeat: "no-repeat", marginTop:'550px', 
   }} >
    <div className='carousel'>
    <Carousel className='carou_body'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c8.alamy.com/compfr/f762xe/affiche-de-film-film-de-titanic-f762xe.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.senscritique.com/media/000021132758/300/ant_man_et_la_guepe_quantumania.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://toutelaculture.com/wp-content/uploads/2023/01/affiche-Babylone-680x924.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </div>
  )
}

export default Contenu