import React from 'react'

import './List.css'
import MovieRow from './Row' 

const MovieList = (props) =>{

    return (
        <section className="lists">
        {props.movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items.data}></MovieRow>
        ))
        }
      </section>
    )
};

export default MovieList;