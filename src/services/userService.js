import { post, put } from "../services/restService";

const endPoints = {
    register: '/users',
    logIn: '/login',
    logOut: '/logout',
    edit: '/users/',
};

export async function register(username, email, password){
    const result = await post(endPoints.register, {username, email, password});
    const userData = {
        username, 
        id: result.objectId,
        token: result.sessionToken,
        hasProfile: result.hasProfile
    };

    return userData
};

export async function login(username, password){
    const result = await post(endPoints.logIn, {username, password});

    const userData = {
        username: result.username,
        id: result.objectId,
        token: result.sessionToken,
        hasProfile: result.hasProfile
    };
    
    return userData;
};

export async function logout(){
    await post(endPoints.logOut);
};

export async function editUser(updatedUserData, userId){// updatedItem must be object
    return put(endPoints.edit + userId, updatedUserData)// returns promise
};