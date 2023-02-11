import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as profileService from "../../../services/profileService";
import * as userService from "../../../services/userService";
import { AuthContext } from "../../../contexts/AuthContext";
export const ProfileCreate = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const ProfileAddHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
          firstName,
          lastName,
          userName,
          gender,
          dateOfBirth,
          country,
          imageUrl,          
        } = Object.fromEntries(formData);
    
        const profileData = {
          firstName,
          lastName,
          userName,
          gender,
          DoB:{ __type: "Date", iso: dateOfBirth},
          country,
          imageUrl,
        };
        
    
        profileService.addProfile(profileData, auth.id)
          .then(() => {
            userService.editUser({hasProfile : true}, auth.id)
                .then(() => {
                    setAuth({...auth, hasProfile:true});
                }).catch((err) => {
                    alert(`Error ${err.error}`);
                });
            navigate('/');
          }).catch((err) => {
            alert(`Error ${err.error}`);
          });
      }
    return (
        <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0" }}>
            <div className="container py-5 ">
                <div className="row align-items-center justify-content-around">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h1 className="text-white"><span className="text-primary">Travel</span>journal</h1>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Create Profile</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={ProfileAddHandler} className="row justify-content-around">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="firstName" name="firstName" className="form-control p-4" placeholder="First Name" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="lastName" name="lastName" className="form-control p-4" placeholder="Last Name" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="userName" name="userName" className="form-control p-4" placeholder="Username" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="gender" name="gender" className="form-control p-4" placeholder="Gender" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control p-4" placeholder="Date of birth" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="country" name="country" className="form-control p-4" placeholder="Country" required="required" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text"  id="imageUrl" name="imageUrl" className="form-control p-4" placeholder="ImageUrl" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className=" btn btn-primary btn-block py-3" type="submit">Create</button>
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