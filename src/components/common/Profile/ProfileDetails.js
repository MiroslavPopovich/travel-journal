export const ProfileDetails = () => {
    return (
        <div className="container-fluid bg-registration py-5 row align-items-center justify-content-around" style={{ margin: "90px 0" }}>
            <div className="container py-5 bg-white row col-lg-8 align-items-center justify-content-evenly">
                <div className="team-item bg-white col-lg-3 p-0 row align-items-center justify-content-around">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                    </div>
                    <div className="text-center py-4">
                        <h5 className="text-truncate">NickName</h5>
                    </div>
                </div>
                <div className="text-left py-4">
                    <p className="m-2">First Name</p>
                    <p className="m-2">Second Name</p>
                    <p className="m-2">Genser</p>
                    <p className="m-2">D.O.B</p>
                    <a href="/index.html" className="btn btn-info mt-1 mr-2">Edit Now</a>
                    <a href="/index.html" className="btn btn-danger mt-1 mr-2">Delete</a>
                </div>
            </div>
        </div>
    );
}