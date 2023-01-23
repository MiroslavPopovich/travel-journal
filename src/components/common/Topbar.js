import { Link } from "react-router-dom";
export const Topbar = () => {
    return (
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <Link to="/login" className="text-body mb-3"><i class="fas fa-sign-in-alt mr-2"></i>LogIn</Link>
                            <p className="text-body px-3">|</p>
                            <Link to="/register" className="text-body mb-3"> <i class="fas fa-id-card mr-2"></i>Register</Link>
                            <p className="text-body px-3">|</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-primary px-3" href="/index.html">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-primary px-3" href="/index.html">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-primary px-3" href="/index.html">
                                <i class="fab fa-instagram-square"></i>
                            </a>
                            <a className="text-primary pl-3" href="/index.html">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}