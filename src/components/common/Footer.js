
export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 py-3 px-sm-3 px-lg-5" style={{ marginTop: "0px" }}>
                <div className="row pt-3 justify-content-around">
                    <div className="col-lg-3 col-md-6">
                        <a href="/index.html" className="navbar-brand">
                            <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
                        </a>
                        <p className="m-0 text-white-50">Copyright &copy;  All Rights Reserved.</p>
                        <p className="m-0 text-white-50">Designed by Miroslav Popovich</p>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white-50 mb-1" href="/.index.html"><i className="fa fa-angle-right mr-2"></i>Xxxxx</a>
                            <a className="text-white-50 mb-1" href="/.index.html"><i className="fa fa-angle-right mr-2"></i>Xxxxx</a>
                            <a className="text-white-50 mb-1" href="/.index.html"><i className="fa fa-angle-right mr-2"></i>Xxxxx</a>
                            <a className="text-white-50 mb-1" href="/.index.html"><i className="fa fa-angle-right mr-2"></i>Xxxxx</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Contact Us</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Xxxxxx, Xxx Xxxxx, XX</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+000 000 0000</p>
                        <p><i className="fa fa-envelope mr-2"></i>xxxx@xxxx.xxx</p>
                    </div>
                </div>
            </div>

        </>
    );
}