import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoBackBtn } from "../GoBackBtn";
import * as profileService from "../../../services/profileService";
import { AuthContext } from "../../../contexts/AuthContext";
import { ProfileContext } from "../../../contexts/ProfileContext";

export const ProfileEdit = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const { profile, setProfile } = useContext(ProfileContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        userName: profile.userName,
        gender: profile.gender,
        dateOfBirth: profile?.DoB?.iso.split("T")[0],
        country: profile.country,
        imageUrl: profile.imageUrl,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const ProfileEditHandler = (e) => {

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

        const contactData = {
            firstName,
            lastName,
            userName,
            gender,
            DoB: { __type: "Date", iso: new Date(dateOfBirth).toISOString() },
            country,
            imageUrl,
        };


        profileService.editProfile(contactData, profile.objectId)
            .then(() => {
                profileService.getProfile(auth.id)
                    .then(result => {
                        setProfile(result.results[0]);
                        setAuth({ ...auth });
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
                                <h1 className="text-white m-0">Edit Profile</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={ProfileEditHandler} className="row justify-content-around">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <span>First Name</span>
                                            <input type="text" id="firstName" name="firstName" className="form-control p-4" value={values.firstName} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>Last Name</span>
                                            <input type="text" id="lastName" name="lastName" className="form-control p-4" value={values.lastName} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>User Name</span>
                                            <input type="text" id="userName" name="userName" className="form-control p-4" value={values.userName} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>Gender</span>
                                            <input type="text" id="gender" name="gender" className="form-control p-4" value={values.gender} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>Date Of Birth</span>
                                            <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control p-4" value={values.dateOfBirth} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>Country</span>
                                            <input type="text" id="country" name="country" className="form-control p-4" value={values.country} onChange={changeHandler} required="required" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <span>Image Url</span>
                                            <input type="text" id="imageUrl" name="imageUrl" className="form-control p-4" value={values.imageUrl} onChange={changeHandler} required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className="btn btn-primary btn-block py-2" type="submit">Edit</button>
                                        <GoBackBtn className="btn btn-block py-2 btn-secondary"/>
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