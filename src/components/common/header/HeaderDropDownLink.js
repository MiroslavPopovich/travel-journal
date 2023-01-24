import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext";

export const HeaderDropDownLink = (props) => {
    const {linkState, setLinkState} = useContext(HeaderContext);

    function clickHandler(e){
        e.preventDefault();
        setLinkState(!linkState);
    }
    let toggleClass = linkState ? 'active' : '';
    return (
        <Link to={props.to} className={`${props.className} ${toggleClass}`} onClick={clickHandler}>{props.text}</Link>
    );
}