import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './VideoCard.css';   
import { Link } from "react-router-dom";
function VideoCard({image,title, channel , views , timestamp,channelImage}){
    return(
        <div className="Video__Card">
            <Link to="/search">
            <img className="VideoCard__thumnell" src={image} alt=""/>
            </Link>
            <div className="VideoCard__info">
                <Avatar
                className="__avatar"
                alt={channel}
                src={channelImage}
                />
            

             <div className="video__text" >
              <h4 className="video__text_tital">{title}</h4>
              <p>{channel}</p>
              <p>{views} . {timestamp}</p>
            </div>
         </div>

        </div>

    );
}
export default VideoCard;
    