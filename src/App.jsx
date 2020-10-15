import React, { useEffect, useState } from 'react'
import './App.css';

import Tmdb from '../src/api/tmdb'

import Header from './components/header'
import FeaturedMovie from './components/movie/Featured'
import MovieList from './components/movie/List'
import Footer from './components/footer'
import Loader from './components/loader'

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const loadAll = async () => {
    const list = await Tmdb.getHomeList();
    setMovieList(list);

    const originals = list.filter(i => i.slug === 'originals');
    const randomChosen = Math.floor(Math.random() * originals[0].items.data.results.length - 1);
    const chosen = originals[0].items.data.results[randomChosen];
    const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }

  const scrollListener = () => {
    if (window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {

    loadAll()
  }, []);

  useEffect(() => {
    
    //quando tiver qualquer evento de scroll, ele ira chamar o scrollListener
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="App">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <MovieList movieList={movieList} />
      
      <Footer/>
      {movieList.length <= 0 &&
        <Loader/>
      }
    </div>
  );
};

export default App;