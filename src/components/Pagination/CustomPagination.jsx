import React from "react";
import { Pagination} from "@mui/material";
import './CustomPagination.css';




const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (<>
    <div className="pagination"
    style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop:10,
    }}>
      <Pagination onChange={(e) => handlePageChange(e.target.textContent)}
      count={numOfPages} color="primary" />
      
    </div>
  </>);
};

export default CustomPagination;
