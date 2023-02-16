import { Link } from "react-router-dom";
export const ArticleItem = ({
    catalogueTitle,
    catalogueId,
    article
}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={article.imageUrl ? `${article.imageUrl}` : "../../img/package-2.jpg"} alt="" />
                <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{`${article.country},  ${article.city}`}</small>
                    </div>
                    <Link className="h5 text-decoration-none" to={`/catalogue/${catalogueTitle}/${catalogueId}/${article.objectId}`} state={{ article }}>{article.title}</Link>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
