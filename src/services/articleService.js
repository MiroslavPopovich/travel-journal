import {  addOwner, addCategory, post, createPointerQuery, get} from "../services/restService";


const endPoints = {
    addArticle: '/classes/Articles',
    allArticlesByCategoryId: (categoryId) => `/classes/Articles?where=${createPointerQuery('category', 'Categories', categoryId)}&count=1`,
    allArticles: '/classes/Articles',
};

export async function addArticle(articleData, ownerId, categoryId){// profileData item must be object
    addOwner(articleData, ownerId);
    addCategory(articleData, categoryId);
    return post(endPoints.addArticle, articleData)// returns promise
};

export async function getArticlesByCategory(categoryId) {
    return get(endPoints.allArticlesByCategoryId(categoryId));// returns promise
};

export async function getAllArticles(){
    return get(endPoints.allArticles);
}