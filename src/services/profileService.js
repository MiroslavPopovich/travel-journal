import { get, createPointerQuery, addOwner, post, put } from "../services/restService";

const endPoints = {
    addProfile: '/classes/Profile',
    getProfileByOwnerId: (ownerId) => `/classes/Profile?where=${createPointerQuery('owner', '_User', ownerId)}`,
    editProfile: '/classes/Profile/',
};

export async function getProfile(ownerId) {
    return get(endPoints.getProfileByOwnerId(ownerId));// returns promise
};

export async function addProfile(profileData, ownerId){// item must be object
    addOwner(profileData, ownerId)
    return post(endPoints.addProfile, profileData)// returns promise
};

export async function editProfile(profileData, profileId){
    return put(endPoints.editProfile + profileId, profileData);
};