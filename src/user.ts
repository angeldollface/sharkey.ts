import { fetchJSON } from './network.ts';

export async function getUserInfo(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string,
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/users/show";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    let payload: Object = {
        detailed: true,
        username: userName,
        host: server
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function getUserFollowing(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/users/following";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    let payload: Object = {
        username: userName,
        host: server
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function getUserFollowers(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/users/followers";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    let payload: Object = {
        username: userName,
        host: server
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export default {
    getUserInfo,
    getUserFollowers,
    getUserFollowing
};