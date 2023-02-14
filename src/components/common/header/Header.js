import { useState, useContext } from "react";
import { HeaderLink } from "./HeaderLink";
import { HeaderDropDown } from "./HeaderDropDown";
import { HeaderContext } from "../../../contexts/HeaderContext";
import { AuthContext } from "../../../contexts/AuthContext";

export const Header = () => {

    const [linkState, setLinkState] = useState(false);
    const { auth } = useContext(AuthContext);

    return (
        <HeaderContext.Provider value={
            {
                linkState,
                setLinkState,
            }}>
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }}>
                    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="/index.html" className="navbar-brand">
                            <h1 className="m-0 text-primary"><span className="text-dark">Travel</span>journal</h1>
                        </a>
                        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <HeaderLink to="/" className="nav-item nav-link" text="Home" />
                                <HeaderLink to="/about" className="nav-item nav-link" text="About" />
                                <HeaderLink to="/categories" className="nav-item nav-link" text="Categories" />
                                <HeaderLink to="/catalogue/all/null" className="nav-item nav-link" text="Catalogue" />
                                {auth.id 
                                    ? 
                                    <HeaderDropDown />
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </HeaderContext.Provider>
    );

}