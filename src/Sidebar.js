import React from "react";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HistoryIcon from '@material-ui/icons/History';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AddCommentIcon from '@material-ui/icons/AddComment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import './Slidebar.css';
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="Slider__part">
            <Link to="/">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            </Link>
            <Link to="/search">
            <SidebarRow Icon={SubscriptionsIcon} title="subscribe"/>
            </Link>
            <SidebarRow Icon={WhatshotIcon} title="trending"/>
            <hr/>
            <SidebarRow Icon={AddCommentIcon } title="Comment"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={LibraryAddCheckIcon} title="Labrery"/>
            <SidebarRow Icon={AddToQueueIcon} title="Adding"/>
            <SidebarRow Icon={WatchLaterIcon} title="Comment"/>
            <SidebarRow Icon={AccountCircleIcon} title="Acount"/>
            <SidebarRow Icon={AddLocationIcon} title="Location"/>
            <hr/>
            
            




        </div>
 

    );
}
export default Sidebar;