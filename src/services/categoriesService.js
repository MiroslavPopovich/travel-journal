import { get } from "../services/restService"
const endPoints = {
    getAllCategories: '/classes/Categories',
};

export async function getCategories() {
    return get(endPoints.getAllCategories);// returns promise
};

