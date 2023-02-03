import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { ConfirmationPopUp } from "../ConfirmationPopUp";

export const ProfileDetails = () => {
    const { profile } = useContext(ProfileContext);
    const [show, setShow] = useState(false);
    function clickHandler(){
        setShow(true);
    };
    
    
    return (
        <>
        <div className="container-fluid bg-registration py-5 row align-items-center justify-content-around" style={{ margin: "90px 0" }}>
            <div className="container py-5 bg-white row col-lg-8 align-items-center justify-content-evenly">
                <div className="team-item bg-white col-lg-3 p-0 row align-items-center justify-content-around">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={profile.imageUrl} alt="" />
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">{profile.userName}</h5>
                    </div>
                </div>
                <div className="text-left py-4">
                    <p className="m-2">{profile.firstName}</p>
                    <p className="m-2">{profile.lastName}</p>
                    <p className="m-2">{profile.gender}</p>
                    <p className="m-2">{profile.country}</p>
                    <p className="m-2">{profile?.DoB?.iso}</p>
                    <Link to={`/profile/edit/${profile.objectId}`} className="btn btn-info mt-1 mr-2">Edit Now</Link>
                    <button className="btn btn-danger mt-1 mr-2" onClick={clickHandler} >Delete</button>
                </div>
            </div>
        </div>
        <ConfirmationPopUp show={show} setShow={setShow}/>
        </>
    );
}