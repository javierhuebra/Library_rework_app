import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { RiSettings5Fill, RiUser3Line } from "react-icons/ri";
const MenuBurger = ({setStateModal, setStateMenucito, stateLogin, setStateLogin, statePreview, setStatePreview}) =>{
    const navigate = useNavigate();

    const changeStates =() =>{
        setStateModal(true);
        setStateMenucito(false);
        navigate('/');
    }

    const changeLogin = () =>{
        setStateLogin(!stateLogin);
        setStateMenucito(false);
        setStatePreview(false);
        navigate('/');
    }
    return(
        <div className="menucito">
            {stateLogin && <button className="btn-add-book" onClick={changeStates}><HiPlus/> Add Book</button>}
            {stateLogin && <button onClick={()=>setStatePreview(!statePreview)} className={`btns-menucito ${statePreview ? 'adm-view':'cli-view'}`}>{statePreview ? <RiSettings5Fill/>:<RiUser3Line/>}{statePreview ? 'Admin View':'Client View'}</button>}

            <button className="btns-menucito">Help</button>
            <button className="btns-menucito">Creators</button>
            {stateLogin && <button onClick={changeLogin} className="btns-menucito btn-log-out">Log out</button>}
            {!stateLogin && <div className="login-inputs">
                <label>Username</label>
                <input type='text' defaultValue={'admin'}/>
                <label>Password</label>
                <input type='password' defaultValue={'admin'} />
                <div className="btn-login"><button className="btns-menucito" onClick={changeLogin}>Log In</button></div>
                
            </div>}
        </div>
    )
}
export default MenuBurger ;