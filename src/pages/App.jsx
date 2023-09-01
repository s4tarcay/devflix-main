import { useEffect } from "react";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import { useState } from "react";

import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/Menu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isMenu, setMenu] = useState(true);
  const apiKey = "e4d577fa";

  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;
  

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

const toggMenu = () => {
  setIsMenu(!isMenu);
}

  return (
    <div id="app">
      <div className="app">
        <img src={logo} alt="logo devflix"></img>
      </div>
      
      <div className="searchBar">
      <ion-icon name="reorder-four-outline" onClick=(toggMenu) />
        <Menu cli />
      </div>
      
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="pesquise aqui "
        />
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key ={movie.imdbID}  movies={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😢</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>Caitto</Footer>
    </div>
  );
};




export default App;

