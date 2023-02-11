import { useParams } from "react-router-dom";
export const ArticleDetails = () => {
    const params = useParams();
    return (
        <div className="container-fluid py-5 " style={{ justifyContent: "center" }}>
            <div className="container pt-5" >
                <div className="row">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>About</h6>
                        <h1 className="mb-3">We had the Best Tour Ever {params.articleId}</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut
                            vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duolores
                            lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sitlores lorem lorem ipsum sit et
                            ipsum. Sadip sea amet diam dolore sed et. Sitlores lorem lorem ipsum sit et ipsum. Sadip sea
                            amet diam dolore sed et. Sitlores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed
                            et. Sit
                        </p>
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
                        <a href="/index.html" className="btn btn-primary mt-1 mr-2" style={{ float: "right" }}>Close</a>
                        <a href="/index.html" className="btn btn-info mt-1 mr-2" style={{ float: "right" }}>Edit</a>
                        <a href="/index.html" className="btn btn-danger mt-1 mr-2" style={{ float: "right" }}>Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
