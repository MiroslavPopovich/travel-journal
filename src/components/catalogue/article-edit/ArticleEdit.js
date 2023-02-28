import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoBackBtn } from "../../common/GoBackBtn";
import * as categoriesService from "../../../services/categoriesService";
import * as articleService from "../../../services/articleService";
export const ArticleEdit = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { state } = useLocation();
    // const article = state?.article;
    const location = useLocation();
    const article = location.state.article;
    const navigate = useNavigate();
    const [values, setValues] = useState({
        categoryId: article.category.objectId,
        title: article.title,
        country: article.country,
        city: article.city,
        text: article.text,
        imageUrl: article.imageUrl,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

    };
    
    useEffect(() => {
        categoriesService.getAllCategories()
            .then((result) => {
                setCategories(result.results);
                setLoading(false);
            });
    }, []);

    const ArticleEditHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
            categoryId,
            title,
            country,
            city,
            text,
            imageUrl,
        } = Object.fromEntries(formData);

        const articleData = {
            category:{__type: 'Pointer', className: 'Categories', objectId: `${categoryId}`},
            title,
            country,
            city,
            text,
            imageUrl,
        }


        articleService.editArticle(articleData, article.objectId)
            .then(() => {
                navigate(-1);
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
                                <h1 className="text-white m-0">Edit an Article</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={ArticleEditHandler} className="row justify-content-around">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="title" name="title" className="form-control p-4" placeholder="Article Title" required="required" onChange={changeHandler} value={values.title} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select className="form-control form-select h-100" id="category" name="categoryId" required onChange={changeHandler} value={loading ? "" : values.categoryId}>
                                                {loading
                                                    ? <option value="">Loading...</option>
                                                    : categories.map(category => <option key={category.objectId} value={category.objectId}>{category.category}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="country" name="country" className="form-control p-4" placeholder="Country" required="required" onChange={changeHandler} value={values.country} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" id="city" name="city" className="form-control p-4" placeholder="City/Town" required="required" onChange={changeHandler} value={values.city} />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <textarea id="text" name="text" rows="6" className="form-control p-4" placeholder="Article Text" required="required" onChange={changeHandler} value={values.text} />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text" id="imageUrl" name="imageUrl" className="form-control p-4" placeholder="imageUrl" required="required" onChange={changeHandler} value={values.imageUrl} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className="btn btn-primary btn-block py-2" type="submit">Edit Article</button>
                                        <GoBackBtn className="btn btn-block py-2 btn-secondary" />
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