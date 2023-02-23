import { useContext, useState } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { HeaderDropDownLink } from "./HeaderDropDownLink";
import { HeaderLink } from "./HeaderLink";
import { PasswordChangePopUp } from "../PasswordChangePopUp";

export const HeaderDropDown = () => {
    const { linkState, setLinkState } = useContext(HeaderContext);
    const { auth } = useContext(AuthContext);
    const { profile } = useContext(ProfileContext);
    const [show, setShow] = useState(false);
    function showHandler() {
        setShow(true);
    };
    return (
        <>
            <div className={linkState ? "backdrop" : "d-none"} onClick={() => {setLinkState(!linkState)}}></div>
            <div className={"nav-item dropdown"}>
                <HeaderDropDownLink to={null} className="nav-link" data-toggle="dropdown" text="My Account" />
                <div className={`dropdown-menu border-0 m-0 ${linkState ? 'show' : ''}`}>
                    <HeaderLink to="/article/create" className="dropdown-item" text="Post an Article" />
                    <HeaderLink to="/mycatalogue" className="dropdown-item" text="My Articles" />
                    {auth.hasProfile
                        ?
                        <HeaderLink to={`/profile/${profile.objectId}/details`} className="dropdown-item" text="My Profile" />
                        :
                        <HeaderLink to="/profile/create" className="dropdown-item" text="Create Profile" />
                    }
                    <HeaderLink to={null} className="dropdown-item" text="LogOut" isLogOut={true} icon={<i className="fas fa-sign-out-alt mr-2"></i>} />
                    <button className="dropdown-item small text-danger" onClick={showHandler}>Change password</button>
                </div>
                <PasswordChangePopUp show={show} setShow={setShow} />
            </div>
        </>
    );
}