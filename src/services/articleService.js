import {  addOwner, addCategory, post, createPointerQuery, get, del} from "../services/restService";


const endPoints = {
    addArticle: '/classes/Articles',
    allArticlesByCategoryId: (categoryId) => `/classes/Articles?where=${createPointerQuery('category', 'Categories', categoryId)}&count=1`,
    allArticlesByOwnerId: (ownerId) =>`/classes/Articles?where=${createPointerQuery('owner', '_User', ownerId)}&count=1`,
    allArticles: '/classes/Articles',
    deleteArticle: '/classes/Articles/',
};

export async function addArticle(articleData, ownerId, categoryId){// profileData item must be object
    addOwner(articleData, ownerId);
    addCategory(articleData, categoryId);
    return post(endPoints.addArticle, articleData)// returns promise
};

export async function deleteArticle(articleId){
    return del(endPoints.deleteArticle + articleId)
};

export async function getArticlesByCategory(categoryId) {
    return get(endPoints.allArticlesByCategoryId(categoryId));// returns promise
};

export async function getArticlesByOwner(ownerId){
    return get(endPoints.allArticlesByOwnerId(ownerId))
};

export async function getAllArticles(){
    return get(endPoints.allArticles);
};