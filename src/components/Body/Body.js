import React, {useState, useEffect, useContext, createContext} from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useStateValue } from "../../StateProvider";
import bodyViewContext from "./BodyContext";
import Sidebar from "../Sidebar/Sidebar";

import Search from "../Search/Search";



//components 
import SelectLibrary from "./SelectLibrary";

function Body({ spotify }) {

  const {views, setSomething} = useContext(bodyViewContext);
  const [pageView, setPageView] = useState("Search");
  const [headerView, setHeaderView] = useState("");

  useEffect(() => {
    if(views === "library") {
      setPageView(<SelectLibrary/>);
      setHeaderView(<Header spotify = {spotify}/>);

    } else if (views === "Search") {
      setPageView (<Search/>);
      setHeaderView("");
    }
  }, [views])




  return (    
    <div className="body"> 
      {headerView}
      {pageView}
    </div>

  );
}

export default Body;
