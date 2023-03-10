import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService"

export const Register = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const RegisterHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
          email,
          password,
          confirmPassword,
        } = Object.fromEntries(formData);
        
        if (password === confirmPassword) {
          userService.register(email, email, password)
            .then((result) => {
              console.log(result);
                setAuth(result);
                navigate('/');
            }).catch((err) => {
                alert(`Error ${err.error}`);
                //navigate('/404');
            });
        } else {
          alert(`Passwords don't match`);
        }
    };

    return (
        <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0" }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Be part of</h6>
                            <h1 className="text-white"><span className="text-primary">Travel</span>Journal</h1>
                        </div>
                        <ul className="list-inline text-white m-0">
                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Share your experience</li>
                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Post articles</li>
                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Coment</li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Register Now</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={RegisterHandler}>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email"  className="form-control p-4" placeholder="Your email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" className="form-control p-4" placeholder="Password" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control p-4" placeholder="Confirm password" required="required" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}