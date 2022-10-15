import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
const MenuBurger = ({setStateModal, setStateMenucito}) =>{
    const navigate = useNavigate();

    const changeStates =() =>{
        setStateModal(true);
        setStateMenucito(false);
        navigate('/');
    }
    return(
        <div className="menucito">
            <button className="btn-add-book" onClick={changeStates}><HiPlus/> Add Book</button>
            <button className="btns-menucito">Help</button>
            <button className="btns-menucito">Creators</button>
            <button className="btns-menucito">Log out</button>
        </div>
    )
}
export default MenuBurger ;