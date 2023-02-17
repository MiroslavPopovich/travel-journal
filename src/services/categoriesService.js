import { get } from "../services/restService"
const endPoints = {
    categoryById: (categoryId) => `/classes/Categories/${categoryId}`,
    allCategories: '/classes/Categories',
};

export async function getAllCategories() {
    return get(endPoints.allCategories);// returns promise
};

export async function getCategoryById(categoryId) {
    return get(endPoints.categoryById(categoryId));
}