import { Link } from "react-router-dom";
export const MyArticleItem = ({
    article,
}) => {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6 pb-2">
            <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={article.imageUrl ? `${article.imageUrl}` : "../../img/package-2.jpg"} alt="" />
                    <div className="team-social">
                        <Link className="btn btn-outline-primary btn-square" to={`/catalogue/myCatalogue/${article.category.objectId}/${article.objectId}`} state={{ article }}><i className="fa-solid fa-info"></i></Link>
                        <a className="btn btn-outline-info btn-square" href="/.index.html"><i className="fa-regular fa-pen-to-square"></i></a>
                        <a className="btn btn-outline-danger btn-square" href="/.index.html"><i className="fa-solid fa-trash"></i></a>                                
                    </div>
                </div>
                <div className="text-center overflow-auto py-2 team-item-text row align-items-center justify-content-around">
                    <p className="m-0 col-lg-10 small">{article.title}</p>
                </div>
            </div>
        </div>
    )
};