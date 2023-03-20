import { Chip } from "@mui/material";
import { margin } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import "./Genres.css";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(
      genres.filter((g) => {
        return g.id !== genre.id;
      })
    );
    setPage(1);
  };

  const handleRemove = (genre) => {
      setSelectedGenres(
          selectedGenres.filter((selected) => {return selected.id !== genre.id})
      );
      setGenres([...genres,genre]);
      setPage(1);
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=67fefbaa38331d1b02df78df2fb49196&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);
  return (
    <>
      <div className="tags" style={{ padding: "20px 0" }}>
        {selectedGenres &&
          selectedGenres.map((genre) => {
            return (
              <Chip
                label={genre.name}
                style={{ margin: 2 }}
                size="medium"
                color="primary"
                key={genre.id}
                clickable
                onDelete={() => handleRemove(genre)}
              />
            );
          })}
        {genres &&
          genres.map((genre) => {
            return (
              <Chip
                label={genre.name}
                style={{ margin: 2 }}
                size="medium"
                key={genre.id}
                clickable
                onClick={()=> handleAdd(genre)}
              />
            );
          })}
      </div>
    </>
  );
};

export default Genres;
