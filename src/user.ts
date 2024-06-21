/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

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
        throw e;
    }
}

export async function getUserFollowing(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/following";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
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
        throw e;
    }
}

export async function getUserFollowers(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/followers";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
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
        throw e;
    }
}

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
        withReplies: withReplies
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
        throw e;
    }
}

export async function unfollowUser(
    userName: string,
    server: string,
    apiToken: string,
    baseUrl: string,
    apiBase: string,
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/following/deconste";
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
        return e;
    }
}

export default {
    followUser,
    getUserInfo,
    unfollowUser,
    getUserFollowers,
    getUserFollowing
};