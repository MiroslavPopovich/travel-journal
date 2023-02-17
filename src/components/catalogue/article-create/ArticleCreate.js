import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import * as categoriesService from "../../../services/categoriesService";
import * as articleService from "../../../services/articleService";

export const ArticleCreate = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        categoriesService.getAllCategories()
            .then((result) => {
                setCategories(result.results);
                setLoading(false);
            });
    }, []);
    const ArticleAddHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
            title,
            categoryId,
            country,
            city,
            text,
            imageUrl,
        } = Object.fromEntries(formData);

        const articleData = {
            title,
            country,
            city,
            text,
            imageUrl,
        };
        articleService.addArticle(articleData, auth.id, categoryId)
            .then(() => {
                navigate('/');
            }).catch((err) => {
                alert(`Error ${err.error}`);
            });

    }
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
                                <h1 className="text-white m-0">Post an Article</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={ArticleAddHandler} className="row justify-content-around">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="title" name="title" className="form-control p-4" placeholder="Article Title" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select className="form-control form-select h-100" id="category" name="categoryId" required defaultValue={""} >
                                                <option value="" disabled>
                                                    {loading
                                                        ? "Loading..."
                                                        : "Categories"}
                                                </option>
                                                {categories.map(category => <option key={category.objectId} value={category.objectId}>{category.category}</option>)}
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="country" name="country" className="form-control p-4" placeholder="Country" required="required" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="city" name="city" className="form-control p-4" placeholder="City/Town" required="required" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <textarea id="text" name="text" rows="6" className="form-control p-4" placeholder="Article Text" required="required" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text" id="imageUrl" name="imageUrl" className="form-control p-4" placeholder="imageUrl" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className=" btn btn-primary btn-block py-3" type="submit">Post Article</button>
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