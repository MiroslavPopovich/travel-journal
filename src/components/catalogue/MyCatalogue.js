import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ReloadContext } from "../../contexts/ReloadContext";
import { MyArticleItem } from "./my-article-item/MyArticleItem";
import { ConfirmationPopUp } from "../common/ConfirmationPopUp";
import * as articleService from "../../services/articleService";
export const MyCatalogue = () => {

    const { auth } = useContext(AuthContext);
    const {reload, setReload } = useContext(ReloadContext);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);
    const [currentArticle, setCurrentArticle] = useState(null);
    
    useEffect(() => {
        articleService.getArticlesByOwner(auth.id)
        .then((result) => {
            setArticles(result.results);
            setLoading(false);
        });
    }, [auth.id, reload]);

    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>ARTICLES</h6>
                    <h1>My Articles</h1>
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
                        articles.map( article => <MyArticleItem key={article.objectId} article={article} setCurrentArticle={setCurrentArticle} setShow={setShow}/>)
                }
                <ConfirmationPopUp show={show} setShow={setShow} type={'article'} article={currentArticle} goBack={false} action={{reload, setReload}}/>
                </div>
            </div>
        </div>
    );
}