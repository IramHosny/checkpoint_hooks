import React from 'react'
import Moviecard from './Moviecard'
import Addmovies from './Addmovies'

function Movielist({movies, setmovies, text, rate}) {
  return (
    <div>
      
      
      
      
      
    <div className='img_movielist'>
    <img src='https://img.freepik.com/photos-premium/gobelet-papier-pop-corn-battant-film-fond-jaune-place-pour-texte_178193-843.jpg' alt=''></img>
      </div>
      
      <div>
      <div className='btn_add'>
        <Addmovies movies={movies} setmovies={setmovies}/>
      </div>
      <div className='titrelist'>
      <h1> MovieList </h1>
      </div>
      <div className='list'>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>= rate ).map((el)=> <Moviecard el={el} />).reverse()}
    </div>
    </div>
  
    </div>
    

  )
}

export default Movielist