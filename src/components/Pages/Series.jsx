
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import Genres from "../Genres";
import useGenre from "../../hooks/useGenre";

const Series = () => {
    const[page,setPage] = useState(1);
    const [content,setContent] = useState([]);
    const [numOfPages,setNumOfPages] = useState();
    const [selectedGenres,setSelectedGenres] = useState([]);
    const [genres,setGenres] = useState([]);
    const genreForURL = useGenre(selectedGenres);
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=67fefbaa38331d1b02df78df2fb49196&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&${page}&with_genres=${genreForURL}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    };
  
    useEffect(() => {
       fetchMovies();
    }, [page,genreForURL])
    return (
        <div>
             <span className="page-title">TV-Series</span>
             <Genres
          type="tv"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="tv"
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      {numOfPages>1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages}/>

      )} 
        </div>
    )
}

export default Series;
