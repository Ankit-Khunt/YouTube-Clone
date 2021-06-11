import React from "react";
import './channelhead.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Channelhead( { image,verified,sub,noOfvideo,channel,description} ){
    return(
        <div className="Channelhead__detail">

            <Avatar className="Channelhead__avtar" alt={channel} src={image} />

            <div className="Channelhead_content">
                <h4>{channel} {verified && <VerifiedUserIcon/>} </h4>
                <p>{sub} Subscriber</p>
                <p>{noOfvideo} videos</p>
                <p>{description} </p>


            </div>
            

            

        </div>

    );
}

export default Channelhead;

