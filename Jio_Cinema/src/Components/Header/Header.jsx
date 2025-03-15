import React, { useEffect, useState } from "react";
import "./header.css";
import JClogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import { ChevronDown, Search, Mic, User } from "lucide-react";
import Fav_show from "../Fav_show/Fav_show";

const Header = (props) => {
  let [searchTitle, setSearchTitle] = useState("");
  // let [filteredMovies, setFilteredMovies]= useState([])

  // useEffect(() => {
  //   let filterMovies = props.movies.filter((movie) => {
  //     return movie.title.toUppercase().includes(searchTitle.toUpperCase());
  //   });
  //   setFilteredMovies(filterMovies)
  
  //   return () => clearInterval(interval);

  // }, [searchTitle]);

  return (
    <>
      <header className="header">
        <nav className="navigation">
          <div className="logo">
            <img src={JClogo} alt="JCLOGO" />
            <div className="premium">
              {" "}
              <img src={crown} alt="crown" />
              <p>Go Premium</p>
            </div>
          </div>

          <ul className="navLinks">
            <li className="link">Home</li>
            <li className="link">Movies</li>
            <li className="link">Sports</li>
            <li className="link">TV Shows</li>
            <li className="link">More </li>
            <ChevronDown />
          </ul>
        </nav>

        <div className="search">
          <div className="searchBox">
            <Search size={18} className="header-icon" />
            <input
              type="text"
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
              placeholder="Movies, Shows and more"
            />
            <Mic size={22} className="header-icon" />
          </div>

          <button className="user">
            <User size={30} />
          </button>
        </div>
      </header>

      {/* <div className="searchResults">
        {
            filteredMovies.map((movie)=>{
                return <Fav_show movie={movie} />
            })
        }
      </div> */}
    </>
  );
};

export default Header;
