import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
const MenuBurger = ({setStateModal, setStateMenucito, stateLogin, setStateLogin}) =>{
    const navigate = useNavigate();

    const changeStates =() =>{
        setStateModal(true);
        setStateMenucito(false);
        navigate('/');
    }
    return(
        <div className="menucito">
            {stateLogin && <button className="btn-add-book" onClick={changeStates}><HiPlus/> Add Book</button>}
            {stateLogin && <button className="btns-menucito">Client Preview</button>}

            <button className="btns-menucito">Help</button>
            <button className="btns-menucito">Creators</button>
            {stateLogin && <button onClick={()=>setStateLogin(false)} className="btns-menucito">Log out</button>}
            {!stateLogin && <div className="login-inputs">
                <p>Login:</p>
                <input type='text' value={'admin'}/>
                <input type='password' value={'admin'} />
                <button onClick={()=>setStateLogin(true)}>Log In</button>
            </div>}
        </div>
    )
}
export default MenuBurger ;