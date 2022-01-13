import React, {createContext} from "react";
import SelectLibrary from "./SelectLibrary";

//Setup a subscription to able to change body views through Context API changes
const bodyViewContext = React.createContext ({
    views: "Home",
    setSomething: () => {}
});



export default bodyViewContext;

