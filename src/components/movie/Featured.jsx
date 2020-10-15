import React from 'react'

import './Featured.css'

/**
 * Filmes em Destaque
 */
const FeaturedMovie = (props) => {


    const firstDate = new Date(props.item.data.first_air_date);

    const genres = [];
    for (let i in props.item.data.genres) {
        genres.push(props.item.data.genres[i].name);
    }
    
    /**Reduzir a descrição para não querar o layout do site */
    let descr = props.item.data.overview;
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.data.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">
                        <span>{props.item.data.original_name}</span>
                    </div>
                    <div className="featured-info">
                        <div className="featured-points">
                            <span>{props.item.data.vote_average} Pontos</span>
                        </div>
                        <div className="featured-year">
                            <span>{firstDate.getFullYear()}</span>
                        </div>
                        <div className="featured-seasons"><span>{props.item.data.number_of_seasons} temporada{props.item.data.number_of_season !== 1 ? 's' : ''}</span></div>
                    </div>

                    <div className="featured-description">
                        <span>{descr}</span>
                    </div>

                    <div className="featured-buttons">
                        <a href={`/watch/${props.item.data.id}`} className="featured-watchbutton">► Assistir</a>
                        <a href={`/list/add/${props.item.data.id}`} className="featured-mylistbutton">+ Minha Lista</a>
                    </div>

                    <div className="featured-genres">
                        <strong>Gêneros: <span>{genres.join(', ')}</span></strong>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default FeaturedMovie;