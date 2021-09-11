import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Player.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";



function Player ({ spotify }) {
    return (
        <div className = "player">
            <div className = "player__body">
                <Sidebar/>
                <Body spotify = {spotify}/>
            </div>
            <Footer spotify = {spotify}/>
        </div>
    );
}

export default Player;