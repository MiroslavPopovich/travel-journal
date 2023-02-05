import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService"

export const Login = () => {

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const LogInHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
          email,
          password,
        } = Object.fromEntries(formData);
        
        userService.login(email, password)
          .then((result) => {
            console.log(result);
            setAuth(result);
            navigate('/');
          }).catch((err) => {
            alert(`Error ${err.error}`);
          });
      }
    return (
        <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0" }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Welcome back</h6>
                            <h1 className="text-white"><span className="text-primary">Travel</span>journal</h1>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Login</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={LogInHandler}> 
                                    <div className="form-group">
                                        <input type="email" id="email" name="email"  className="form-control p-4" placeholder="Your email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" className="form-control p-4" placeholder="Password" required="required" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3" type="submit">Login</button>
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