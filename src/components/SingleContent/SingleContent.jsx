import React from 'react'
import { img_300, unavailable } from '../config/config'
import './SingleContent.css';
import {Badge} from "@mui/material";
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (<>
        
        <ContentModal media_type={media_type} id={id}>
           <Badge badgeContent={vote_average} color={(vote_average > 8) ? "primary" : "secondary"}/>
           <img className="poster" src={poster ? `${img_300}/${poster}`: unavailable} alt={title}></img>
           <b className="title">{title}</b>
           <span className="subTitle">
               {media_type === "tv" ? "TV Series":"Movies"}
               <span className="subTitle">{date}</span>
           </span>
           
          
           
        </ContentModal>
    </>)
}

export default SingleContent
