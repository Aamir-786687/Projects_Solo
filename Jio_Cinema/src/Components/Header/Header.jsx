import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import JClogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import { ChevronDown, Search, Mic, User } from "lucide-react";
import Fav_Show from "../Fav_show/Fav_show";

const Header = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchFilteredMovies = () => {
      const filterMovies = (props.movies || []).filter((movie) =>
        movie.title.toUpperCase().includes(searchTitle.toUpperCase())
      );
      setFilteredMovies(filterMovies);
    };

    fetchFilteredMovies();
  }, [searchTitle, props.movies]);

  return (
    <>
      <header className="header">
        <nav className="navigation">
          <div className="logo">
            <img src={JClogo} alt="JCLOGO" />
            <div className="premium">
              <img src={crown} alt="crown" />
              <p>Go Premium</p>
            </div>
          </div>

          <ul className="navLinks">
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link">Movies</li>
            <li className="link">Sports</li>
            <li className="link">TV Shows</li>
            <li className="link">More</li>
            <ChevronDown />
          </ul>
        </nav>

        <div className="search">
          <div className="searchBox">
            <Search size={18} className="header-icon" />
            <input
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              placeholder="Movies, Shows and more"
            />
            <Mic size={22} className="header-icon" />
          </div>

          <button className="user">
            <User size={30} />
          </button>
        </div>
      </header>

      {searchTitle && (
        <div className="searchResults">
          <Fav_Show title="Search Results" movies={filteredMovies} />
        </div>
      )}
    </>
  );
};

export default Header;
