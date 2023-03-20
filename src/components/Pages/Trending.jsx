import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../Pagination/CustomPagination";


const Trending = () => {
   const [page,setPage] = useState(1) 
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=67fefbaa38331d1b02df78df2fb49196&${page}`
    );
    setContent(data.results);
    
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (<>
    <div>
      <span className="page-title">Trending</span>
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
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
    
  </>);
};

export default Trending;
