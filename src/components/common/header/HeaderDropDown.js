import { useContext } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext";
import { HeaderDropDownLink } from "./HeaderDropDownLink";
import { HeaderLink } from "./HeaderLink";

export const HeaderDropDown = () => {
    const {linkState} = useContext(HeaderContext);
    return (
        <div className="nav-item dropdown">
            <HeaderDropDownLink to={null} className="nav-link dropdown-toggle" data-toggle="dropdown" text="My Account" />
            <div className= {`dropdown-menu border-0 m-0 ${linkState ? 'show' : ''}`}>
                <a href="blog.html" className="dropdown-item">Post an Article</a>
                <HeaderLink to="/mycatalogue" className="dropdown-item" text="My Articles" />
                <HeaderLink to="/profile/create" className="dropdown-item" text="Create Profile" />
                <HeaderLink to="/profile/details" className="dropdown-item" text="My Profile" />
                <HeaderLink to={null} className="dropdown-item" text="LogOut" isLogOut={true} icon={<i className="fas fa-sign-out-alt mr-2"></i>}/>
                <a href="destination.html" className="dropdown-item small text-danger">Change password</a>
            </div>
        </div>
    );
}