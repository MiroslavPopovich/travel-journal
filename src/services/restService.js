import { getUserData } from "./util";
const host = 'https://parseapi.back4app.com';
const applicationId = 'LXtrURXbL6TBgBMFPBVNsYGnLqC2uw1R91d4QSdr';
const restApiKey = 'JXvVV30GuYUrNeIHXAQ3EatUOq0KEniibAWhCXEC';

const endPoints = {
    register: '/users',
    logIn: '/login',
    logOut: '/logout',
};

async function request(url, options){// returns promise
    try{
        const response = await fetch(host + url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw error
        }

        const result = await response.json();
        return result;
    }catch(err){
        throw err; // throws the error again so other fnc calling the request can get the error too
    }
};

function createOption(method = 'GET', data){ // if we don not choose any method it does get option/ data is object for the request body
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': applicationId,
            'X-Parse-REST-API-Key': restApiKey,
        }
    };

    const userData = getUserData();
    
    if(userData) {
        options.headers['X-Parse-Session-Token'] = userData.token; 
    }

    if (data !== undefined){
        
        options.headers['Content-Type'] = 'application/json'; 
        options.body = JSON.stringify(data); // data must be object
    }

    return options;
};

async function post(url, data) { // POST request and returns promise
    return request(url, createOption('POST', data));
};

export async function register(username, email, password){
    const result = await post(endPoints.register, {username, email, password});
    const userData = {
        username, 
        id: result.objectId,
        token: result.sessionToken 
    };

    return userData
};

export async function login(username, password){
    const result = await post(endPoints.logIn, {username, password});

    const userData = {
        username: result.username,
        id: result.objectId,
        token: result.sessionToken 
    };
    
    return userData;
};

export async function logout(){
    await post(endPoints.logOut);
};