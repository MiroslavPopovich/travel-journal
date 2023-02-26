import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { GoBackBtn } from "../../common/GoBackBtn";
import { ConfirmationPopUp } from "../../common/ConfirmationPopUp";
export const ArticleDetails = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const article = location.state.article;
    const [show, setShow] = useState(false);
    function showHandler(){
        setShow(true);
    };
    return (
        <div className="container-fluid py-5 " style={{ justifyContent: "center" }}>
            <div className="container pt-5" >
                <div className="row">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>About</h6>
                        <h1 className="mb-3">{article.title}</h1>
                        <p>{article.text}</p>
                        <div className="row" style={{ justifyContent: "flex-start" }}>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="team-item bg-white shadow-btn">
                                    <div className="position-relative overflow-hidden">
                                        <div className="text-center py-3">
                                            <h5 className="text-truncate mb-0">Comments</h5>
                                        </div>
                                        <div className="team-social">
                                            <a className="btn btn-outline-primary btn-square" href="/.index.html"><i className="fa-regular fa-comments"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="team-item bg-white shadow-btn">
                                    <div className="position-relative overflow-hidden">
                                        <div className="text-center py-3">
                                            <h5 className="text-truncate mb-0">Photos</h5>
                                        </div>
                                        <div className="team-social">
                                            <a className="btn btn-outline-primary btn-square" href="/.index.html"><i className="fa-solid fa-camera-retro"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <GoBackBtn className='btn btn-primary mt-1 mr-2' style={{ float: "right" }}/>
                        {
                            (auth.id === article.owner.objectId)
                                ?
                                <>
                                    <a href="/index.html" className="btn btn-info mt-1 mr-2" style={{ float: "right" }}>Edit</a>
                                    <button className="btn btn-danger mt-1 mr-2" onClick={showHandler} style={{ float: "right" }}>Delete</button>
                                </>
                                : null
                        }
                    </div>
                    <ConfirmationPopUp show={show} setShow={setShow} type={'article'} article={article} goBack={true}/>
                </div>
            </div>
        </div>
    );
}
