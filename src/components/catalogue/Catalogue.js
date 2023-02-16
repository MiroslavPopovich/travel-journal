import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ArticleItem } from "./article-item/ArticleItem";
import * as articleService from "../../services/articleService"
export const Catalogue = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        if (params.catalogueId === 'null') {
            
            articleService.getAllArticles()
                .then((result) => {
                    setArticles(result.results);
                    setLoading(false);
                });
            
        } else {
            setArticles(location.state.articles);
            setLoading(false);
            
        }
    }, [params.catalogueId]);
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Articles</h6>
                    <h1>Exciting destinations in {params.catalogueTitle}</h1>
                </div>
                <div className="row">
                    {loading
                        ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        articles.map(article => <ArticleItem key={article.objectId} article={article} catalogueTitle={params.catalogueTitle} catalogueId={params.catalogueId} />) 
                    }
                </div>
            </div>
        </div>
    );
}