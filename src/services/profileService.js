import { get, createPointerQuery, addOwner, post, put, del } from "../services/restService";

const endPoints = {
    addProfile: '/classes/Profile',
    getProfileByOwnerId: (ownerId) => `/classes/Profile?where=${createPointerQuery('owner', '_User', ownerId)}`,
    editProfile: '/classes/Profile/',
    deleteProfile: '/classes/Profile/',
};

export async function getProfile(ownerId) {
    return get(endPoints.getProfileByOwnerId(ownerId))// returns promise
};

export async function addProfile(profileData, ownerId){// profileData item must be object
    addOwner(profileData, ownerId);
    return post(endPoints.addProfile, profileData)// returns promise
};

export async function editProfile(profileData, profileId){
    return put(endPoints.editProfile + profileId, profileData);
};

export async function deleteProfile(profileId){// id must be string
    return del(endPoints.deleteProfile + profileId)// returns promise
};