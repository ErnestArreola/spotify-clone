import React, {useContext} from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "../../util/spotify";
import { useStateValue } from "../../StateProvider";
import bodyViewContext from "../Body/BodyContext";


 const Sidebar = () => {
  const [{ playlists, view }, dispatch] = useStateValue();
  const {views, setSomething} = useContext(bodyViewContext);

  const handleSetView = () => console.log(views);
 

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
       <a onClick = {() => setSomething("Home")}>         <SidebarOption Icon={HomeIcon} option="Home"/>   </a>
       <a onClick = {() => setSomething("Search")}>   <SidebarOption Icon={SearchIcon} option="Search" /> </a> 
       <a onClick = {() => setSomething("library")}>  <SidebarOption Icon={LibraryMusicIcon} option="Your Library"/> </a>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;