import React from "react";
import { movieList } from "../data";
import RadioComponent from "./RadioComponent";
import "../CSS/SelectMovie.css";
import { useContext } from "react";
import BsContext from "../Context/BsContext";

const SelectMovie = () => {
  const context = useContext(BsContext);
  
  const [movie, setMovie] = [context.movie,context.setMovie];
  const handleChangeMovie = (val) => {
    setMovie(val);
    window.localStorage.setItem("movie", val);
  }
  return (
    <>
      <h1 className="SM_heading">Select a Movie :</h1>
      <div className="SM_main_container">
        {movieList.map((element, index) => {
          return <RadioComponent key={index} data={movie} text={element} changeSelection={handleChangeMovie} />;
        })}
      </div>
    </>
  );
};

export default SelectMovie;
