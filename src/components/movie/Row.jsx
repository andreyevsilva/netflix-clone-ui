import React, { useState } from 'react'

import './Row.css'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const MovieRow = (props) => {
    const PATH = 'https://image.tmdb.org/t/p/w300'

    const [scrollX, setScrollX]= useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2); //Tamanho da Largura do monitor
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2); //Tamanho da Largura do monitor
        const listW = props.items.results.length * 150
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    }

    return (
        <div className="movie-row">
            <h2>{props.title}</h2>

            <div className="movie-row-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}}/>
            </div>

            <div className="movie-row-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}} />
            </div>

            <div className="movie-list-area">
                <div className="movie-list" style={{
                    marginLeft:scrollX,
                    width:props.items.results.length * 150
                }}>
                    {props.items.results.length > 0 && props.items.results.map((item, key) => (
                        <div className="movie-list-item" key={key}>
                            <img src={`${PATH}${item.poster_path}`} alt="Capa do Filme" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

};

export default MovieRow;