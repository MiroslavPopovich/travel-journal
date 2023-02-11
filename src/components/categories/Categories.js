import { useEffect, useState } from "react";
import { CategoryItem } from "./category-item/CategoryItem";
import * as categoriesService from "../../services/categoriesService";
export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        categoriesService.getCategories()
            .then((result) => {
                setCategories(result.results);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Destination</h6>
                    <h1>Explore Top Destination</h1>
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
                        categories.map(category => <CategoryItem key={category.objectId} category={category.category} id={category.objectId}/>)
                    }

                </div>
            </div>
        </div>
    );
}