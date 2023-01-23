import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }}>
                <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="/index.html" className="navbar-brand">
                        <h1 className="m-0 text-primary"><span className="text-dark">Travel</span>journal</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/categories" className="nav-item nav-link">Categories</Link>
                            <Link to="/catalogue" className="nav-item nav-link">Catalogue</Link>
                            <div className="nav-item dropdown">
                                <a href="/index.html" className="nav-link dropdown-toggle" data-toggle="dropdown">My Account</a>
                                <div className="dropdown-menu border-0 m-0" style={{ display: "block" }}>
                                    <a href="blog.html" className="dropdown-item">Post an Article</a>
                                    <Link to="/mycatalogue" className="dropdown-item">My Articles</Link>
                                    <Link to="/profile/create" className="dropdown-item">Create Profile</Link>
                                    <Link to="/profile/details" className="dropdown-item">My Profile</Link>
                                    <a href="single.html" className="dropdown-item"><i class="fas fa-sign-out-alt mr-2"></i>LogOut</a>
                                    <a href="destination.html" className="dropdown-item small text-danger">Change password</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

}