import {  addOwner, addCategory, post, createPointerQuery, get} from "../services/restService";


const endPoints = {
    addArticle: '/classes/Articles',
    getArticlesByCategoryId: (categoryId) => `/classes/Articles?where=${createPointerQuery('category', 'Categories', categoryId)}&count=1`,
};

export async function addArticle(articleData, ownerId, categoryId){// profileData item must be object
    addOwner(articleData, ownerId);
    addCategory(articleData, categoryId);
    return post(endPoints.addArticle, articleData)// returns promise
};

export async function getArticlesByCategory(categoryId) {
    return get(endPoints.getArticlesByCategoryId(categoryId));// returns promise
};