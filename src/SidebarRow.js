import React from "react";
import { Link } from "react-router-dom";
import  './SidebarRow.css';

function SidebarRow( { selected , Icon , title } ){
    return(
        <div className={`Sidebar__Row ${selected && "selected"}`}>
           
            <Icon className="Sidebar__Rowicon"/>
            

            <h2 className="Sidebar__Rowcon"> {title}</h2>
           
        


        </div>

    );
}

export default SidebarRow;