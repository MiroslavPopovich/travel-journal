export const ProfileCreate = () => {
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
                                <form className="row justify-content-around">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control p-4" placeholder="First Name" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="password" className="form-control p-4" placeholder="Last Name" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control p-4" placeholder="Nickname" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control p-4" placeholder="Gender" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control p-4" placeholder="Date of birth" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control p-4" placeholder="Country" required="required" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text" className="form-control p-4" placeholder="ImageURL" required="required" />
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