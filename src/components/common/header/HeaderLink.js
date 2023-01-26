import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as restService from "../../../services/restService"
import { HeaderContext} from "../../../contexts/HeaderContext";
import { AuthContext } from "../../../contexts/AuthContext";


export const HeaderLink = (props) => {

    const { setLinkState } = useContext(HeaderContext);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function clickHandler(e){
        setLinkState(false);
        
        if(props.isLogOut){
            e.preventDefault();
            console.log('logging out');
            restService.logout()
            .then((result) => {
                setAuth({});
                console.log(result);
                console.log('logged out');
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