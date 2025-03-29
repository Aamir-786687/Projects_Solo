import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Tags from "../Components/Tags/Tags";
import Channel from "../Components/Channels/Channel";
import Banner from "../Components/Banner/Banner";
import Fav_show from "../Components/Fav_show/Fav_show";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [bingeWatch, setBingeWatch] = useState([]);
  const [peacockFinest, setPeacockFinest] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://jio-cinema-ea348-default-rtdb.firebaseio.com/movies.json"
        );
        const data = await response.json();

        if (data && Array.isArray(data)) {
          setMovies(data);

          setFavMovies(data.filter(movie => movie.fav === true));
          setDramaMovies(data.filter(movie => movie.genre === "Drama").slice(0, 6));
          setCrimeMovies(data.filter(movie => movie.genre === "Crime"));
          setBingeWatch(data.filter(movie => movie.Binge === true).slice(0, 6));
          setPeacockFinest(data.filter(movie => Number(movie.duration) <= 130).slice(0, 6));
        } else {
          console.log("Data format not supported:", data);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <Tags />
      <Banner />
      <Channel />
      <Fav_show title="Your Fav Shows Now On Jio Cinema" movies={favMovies} />
      <Fav_show title="Drama Jio Cinema" movies={dramaMovies} />
      <Fav_show title="Crime Movie On Jio Cinema" movies={crimeMovies} />
      <Fav_show title="Binge-Worthy Originals On Jio Cinema" movies={bingeWatch} />
      <Fav_show title="Peacock's Finest On Jio Cinema" movies={peacockFinest} />
    </>
  );
};

export default Home;
