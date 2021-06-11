import React from "react";
import Channelhead from './Channelhead';
import './Searchbar.css';
import Searchbar_video from './Searchbar_video';

import MenuIcon from '@material-ui/icons/Menu';
function Searchbar (){
    return(

    <div className="Search__bar">
        <div className="Searchbar__fitler">
        <MenuIcon/>
        
        <h1>Filter</h1>
        </div>

        <hr className="border"/>

        <div className="Searchbar__head">
        <Channelhead
        image="https://www.autoguide.com/blog/wp-content/gallery/exotic-cars-from-2015-sema-show/Exotics-at-SEMA-2015-20.jpg"

        channel="Tesla"
        verified
        sub="100K"
        noOfvideo="325"
        description="Tesla is owned by Mr.Elone musk and it is very big MNC"


        />
         
        


        
        
        

        </div>
        <hr/>
        <div className="Searchbar__info">
        <Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        />
        <Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        /><Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        /><Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        /><Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        /><Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        /><Searchbar_video
        title="about channel"
        views="2.3M views"
        timestamp="3 days to go"
        channelImage="https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg"
        channel="Elon musk"
        image="https://www.businessinsider.in/photo/72151426/elon-musk-said-teslas-pickup-truck-will-be-able-to-tow-over-20-times-more-than-a-ford-f-150-here-are-8-other-bold-claims-hes-made-about-the-truck-/It-will-outperform-a-Porsche-911-and-a-Ford-F-150-.jpg" 

        
        />
            
        </div>
        <hr/>

    </div>
    );
}
export default Searchbar;