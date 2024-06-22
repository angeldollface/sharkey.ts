/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

/**
 * Returns an object containing all public information
 * about the supplied user.
 * @param {string} userName
 * @param {string} server
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} Returns an object containing all public information about a user profile and if failures occur, an error object is returned.
*/
export async function getUserInfo(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string,
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/show";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        detailed: true,
        username: userName,
        host: server
    };
    try {
        const postRequest = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns an object containing all users the supplied username is following.
 * @param {string} userName
 * @param {string} server
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} Returns an object containing all users a user is following. If failures occur, an error object is returned.
*/
export async function getUserFollowing(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/following";
    const targetUserInfo: object = await getUserInfo(
        userName,
        server,
        baseUrl,
        apiBase
    );
    let userId: string = '';
    if (Object.prototype.hasOwnProperty.call(targetUserInfo, 'id')){
        userId = new Map(Object.entries(targetUserInfo)).get('id');
    }
    else {
        throw 'Could not retrieve user ID to complete this request!';
    }
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        userId: userId,
        username: userName,
        host: server
    };
    try {
        const postRequest = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns an object containing all users following a user.
 * @param {string} userName
 * @param {string} server
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} Returns an object containing all users following a user. If failures occur, an error object is returned.
*/
export async function getUserFollowers(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/followers";
    const targetUserInfo: object = await getUserInfo(
        userName,
        server,
        baseUrl,
        apiBase
    );
    let userId: string = '';
    if (Object.prototype.hasOwnProperty.call(targetUserInfo, 'id')){
        userId = new Map(Object.entries(targetUserInfo)).get('id');
    }
    else {
        throw 'Could not retrieve user ID to complete this request!';
    }
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        userId: userId,
        username: userName,
        host: server
    };
    try {
        const postRequest = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns a success object for following a user.
 * @param {string} userName
 * @param {string} server
 * @param {string} apiToken
 * @param {string} baseUrl
 * @param {string} apiBase
 * @param {boolean} withReplies
 * @returns {Promise<object>} Returns a success object if the action of following someone completes. If it does not complete, an error object is returned.
*/
export async function followUser(
    userName: string,
    server: string,
    apiToken: string,
    baseUrl: string,
    apiBase: string,
    withReplies: boolean
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/following/create";
    const user: object = await getUserInfo(
        userName,
        server,
        baseUrl,
        apiBase
    )
    let userId: string = '';
    if (Object.prototype.hasOwnProperty.call(user, 'id')){
        userId = new Map(Object.entries(user)).get('id');
    }
    else {
        throw 'Could not retrieve user ID to complete this request!';
    }
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    const payload: object = {
        userId: userId,
        withReplies: withReplies,
        i: apiToken
    };
    try {
        const postRequest = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns a success object for unfollowing a user.
 * @param {string} userName
 * @param {string} server
 * @param {string} apiToken
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} Returns a success object if the action of unfollowing a user compoletes successfully. If not, an error object is returned.
*/
export async function unfollowUser(
    userName: string,
    server: string,
    apiToken: string,
    baseUrl: string,
    apiBase: string,
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/following/delete";
    const user: object = await getUserInfo(
        userName,
        server,
        baseUrl,
        apiBase
    )
    let userId: string = '';
    if (Object.prototype.hasOwnProperty.call(user, 'id')){
        userId = new Map(Object.entries(user)).get('id');
    }
    else {
        throw 'Could not retrieve user ID to complete this request!';
    }
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    const payload: object = {
        userId: userId,
        i: apiToken
    };
    try {
        const postRequest = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

// Exports everything.
export default {
    followUser,
    getUserInfo,
    unfollowUser,
    getUserFollowers,
    getUserFollowing
};
