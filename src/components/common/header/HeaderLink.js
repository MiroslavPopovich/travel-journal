import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as userService from "../../../services/userService"
import { HeaderContext} from "../../../contexts/HeaderContext";
import { AuthContext } from "../../../contexts/AuthContext";


export const HeaderLink = (props) => {

    const { setLinkState } = useContext(HeaderContext);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function clickHandler(e){
        setLinkState(false);
        //Logout handler
        if(props.isLogOut){
            e.preventDefault();
            //console.log('logging out');
            userService.logout()
            .then((result) => {
                setAuth({});
                //console.log('logged out');
                navigate('/')
            })
            .catch((err) => {
                alert(`Error ${err.error}`);
                //navigate('/404');
                //console.log(error);
            });
        }
    }
    
    const pathName = useLocation().pathname;
    let toggleClass = (pathName===props.to) ? 'active' : '';

    return(
        <Link to={props.to} className={`${props.className} ${toggleClass}`} onClick={clickHandler}>{props.icon}{props.text}</Link>
    );
}