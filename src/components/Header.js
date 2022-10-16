import { BsList } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import imageLogo from '../assets/images/librin-logo.png';

const Header = ({setStateModal, stateLogin, setStateLogin})  =>{
    const [stateMenucito, setStateMenucito] = useState(false);
    const navigate = useNavigate();
    
    return(
        
        <div className="nav-bar">
            {stateMenucito && <MenuBurger 
                setStateModal={setStateModal}
                setStateMenucito={setStateMenucito}
                stateLogin={stateLogin}
                setStateLogin={setStateLogin}
            />}
            <div onClick={()=>navigate("/")}className="logo">
                <img src={imageLogo}/>
                <div className="logo-text"><p>Le Biblio<span className="tec">tec</span></p></div>
            </div>
            <div className="hider-menucito">
                <div onClick={() => setStateMenucito(!stateMenucito)} className="menu"><BsList/></div>
            </div>
            
        </div>
    )
}

export default Header;