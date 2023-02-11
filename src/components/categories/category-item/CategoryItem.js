import { useEffect, useState } from "react";
import * as articleService from "../../../services/articleService"
export const CategoryItem = (props) => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [totalArticles, setTotalArticles] = useState(null);
    useEffect(() => {
        articleService.getArticlesByCategory(props.id)
            .then((result) => {
                setArticles(result.results);
                setTotalArticles(result.count);
                setLoading(false);
            });
    }, [props.id]);
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src="../img/destination-2.jpg" alt="" />
                <a className="destination-overlay text-white text-decoration-none" href="/.index.html">
                    <h5 className="text-white">{props.category}</h5>
                    {loading
                        ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <span>{totalArticles}</span>
                    }
                </a>
            </div>
        </div>
    )

};