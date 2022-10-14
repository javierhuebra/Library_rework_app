import { BsList } from "react-icons/bs";
import { useState } from "react";

const Header = ()  =>{
    const [stateMenucito, setStateMenucito] = useState(false);
    return(
        
        <div className="nav-bar">
            {stateMenucito && <div className="menucito"></div>}
            <div className="logo"></div>
            <div onClick={() => setStateMenucito(!stateMenucito)} className="menu"><BsList/></div>
        </div>
    )
}

export default Header;