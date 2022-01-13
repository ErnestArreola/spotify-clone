import React, {useContext, useState} from "react";
import "./Header.css";
import { useStateValue} from "../../StateProvider";
import bodyViewContext from "../Body/BodyContext";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import Search from "../../components/Search/Search";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  const {views} = useContext(bodyViewContext);
  const [isOnSearch, setisOnSearch] = useState("");

  useEffect(() => {
     if (views === "Search") {
      console.log("Numbers")
      setisOnSearch (<Search/>);
    } else {
      setisOnSearch("")
    }
  }, [views])


  return (
    <div className="header">
      <div className="header__left">
        {isOnSearch}       
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} >  </Avatar>   
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
