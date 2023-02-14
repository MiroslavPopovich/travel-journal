import { useParams, useLocation } from "react-router-dom";
import { ArticleItem } from "./article-item/ArticleItem";

export const Catalogue = () => {
    
    
    const params = useParams();
    const location = useLocation();
    let articles = [];
    if (params.catalogueId === 'null') {
        console.log('All'); 
    }else{
        articles  =  location.state.articles;
        console.log(articles);
    }
    
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Articles</h6>
                    <h1>Exciting destinations in {params.catalogueTitle}</h1>
                </div>
                <div className="row">
               
                { articles.map(article => <ArticleItem key={article.objectId} article={article} catalogueTitle={params.catalogueTitle} catalogueId={params.catalogueId} />) }
                </div>
            </div>
        </div>
    );
}