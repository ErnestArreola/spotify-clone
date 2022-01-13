import React, {useState, createContext} from 'react';
import Footer from "../../components/Footer/Footer";
import "./Player.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";

import bodyViewContext from "../../components/Body/BodyContext";


function Player ({ spotify }) {

    const [views, setSomething] = useState("Home");
    const value = {views, setSomething};  

    return (
        <bodyViewContext.Provider value = {{views, setSomething}}>
        <div className = "player">
            <div className = "player__body">
                <Sidebar/>
                <Body spotify = {spotify}/>
            </div>
            <Footer spotify = {spotify}/>
        </div>
        </bodyViewContext.Provider>
    );
}

export default Player;