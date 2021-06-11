import React from "react";
import './Searchbar_video.css';
import Avatar from "@material-ui/core/Avatar";

function Searchbar_video({image,title, channel , views , timestamp,channelImage}){
    
    return(
        <div className="Searchbar_video">
            <img className="Searchbar__thumnell" src={image} alt=""/>
            <div className="Searchbar__info">
                <Avatar
                className="Searchbar__avatar"
                alt={channel}
                src={channelImage}
                />
            

             <div className="Searchbar__text" >
              <h4 className="Searchbar__text_tital">{title}</h4>
              <p>{channel}</p>
              <p>{views} . {timestamp}</p>
            </div>
         </div>

        </div>

    );
}
export default Searchbar_video;
