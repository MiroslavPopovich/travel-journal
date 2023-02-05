import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as profileService from "../../services/profileService";
import * as userService from "../../services/userService";

export const ConfirmationPopUp = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    function closeHandler() {
        props.setShow(false);
    };

    function ProfileDeleteHandler() {
        console.log(params.profileId);
        profileService.deleteProfile(params.profileId)
            .then(() => {
                userService.editUser({ hasProfile: false }, auth.id)
                    .then(() => {
                        setAuth({ ...auth, hasProfile: false });
                    }).catch((err) => {
                        alert(`Error ${err.error}`);
                    });
                navigate('/');
            }).catch((err) => {
                alert(`Error ${err.error}`);
            });
    };

    return (
        <>
            <div className={props.show ? "fade modal-backdrop show" : "fade"}></div>
            <div className={props.show ? "fade modal show" : "fade modal"} tabIndex="-1" style={props.show ? { display: "block" } : { display: "none" }} role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete your profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeHandler}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete your profile?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={ProfileDeleteHandler}>Delete Profile</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closeHandler}>Don't</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}