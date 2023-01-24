import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContext } from "../../../contexts/HeaderContext";
export const HeaderLink = (props) => {

    const { setLinkState } = useContext(HeaderContext);

    function clickHandler(e){
        setLinkState(false);
    }
    
    const pathName = useLocation().pathname;
    
    let toggleClass = (pathName===props.to) ? 'active' : '';

    return(
        <Link to={props.to} className={`${props.className} ${toggleClass}`} onClick={clickHandler}>{props.text}</Link>
    );
}