import { getUserData } from "./util";
const host = 'https://parseapi.back4app.com';
const applicationId = 'LXtrURXbL6TBgBMFPBVNsYGnLqC2uw1R91d4QSdr';
const restApiKey = 'JXvVV30GuYUrNeIHXAQ3EatUOq0KEniibAWhCXEC';

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

export function createPointerQuery(propName, className, objectId){
    return createQuery({[propName]: createPointer(className, objectId)})
}

function createQuery(query){
    return encodeURIComponent(JSON.stringify(query));
}

function createPointer(className, objectId) {
    return {
        __type: 'Pointer',
        className,
        objectId
    };
}

export function addOwner(record, id) {
    record.owner = createPointer('_User', id)
    return record;
}

export async function post(url, data) { // POST request and returns promise
    return request(url, createOption('POST', data));
};

export async function get(url, data) { // GET request and returns promise
    return request(url, createOption('GET', data));
};

export async function put(url, data) { // PUT request and returns promise
    return request(url, createOption('PUT', data));
};
