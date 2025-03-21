import React,{useState, useEffect} from 'react'
import Fav_show from '../Components/Fav_show/Fav_show'

const Movies = () => {

    let [movies, setMovies] = useState([]);
      let [favMovies, setFavMovies] = useState([]);
      let [dramaMovies, setDramaMovies] = useState([]);
      let [crimeMovies, setCrimeMovies] = useState([]);
      let [bingeWatch, setbingeWatch] = useState([]);
      let [peacockFinest, setpeacockFinest] = useState([]);
    
      useEffect(async () => {
        try {
          let movieResponse = await fetch(
            "https://jio-cinema-ea348-default-rtdb.firebaseio.com/movies.json"
          );
          let moviesData = await movieResponse.json();
    
          setMovies(moviesData);
    
          let favv = moviesData.filter((movie) => {
            return movie.fav === true;
          });
          // console.log(favv)
          setFavMovies(favv);
    
          let drma = moviesData.filter((movie) => {
            return movie.genre === "Drama";
          });
          // console.log(drma)
          setDramaMovies(drma.slice(0,6));
    
          let crim = moviesData.filter((movie) => {
            return movie.genre === "Crime";
          });
          // console.log(crim)
          setCrimeMovies(crim);
    
          let bing = moviesData.filter((movie) => {
            return movie.Binge === true;
          });
          // console.log(bing);
          setbingeWatch(bing.slice(0,6));
    
          let fine = moviesData.filter((movie) => {
            return movie.duration <= "130";
          });
          // console.log(fine);
          setpeacockFinest(fine.slice(0,6));
        } catch (error) {
          console.log("Error:", error);
        }
      }, []);
  return (
    <>
    <div className='moviespage'>
    <Fav_show title="Your Fav Shows Now On Jio Cinema" movies={favMovies}/>
      <Fav_show title="Drama Jio Cinema" movies = {dramaMovies}/>
      <Fav_show title="Crime Movie On Jio Cinema" movies = {crimeMovies}/>
      <Fav_show title="Binge-Worthy Originals On Jio Cinema" movies = {bingeWatch}/>
      <Fav_show title="Peacock's Finest On Jio Cinema" movies= {peacockFinest}/>
      </div>
    </>
  )
}

export default Movies