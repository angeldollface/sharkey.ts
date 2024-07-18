/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

/**
 * Returns the count of users online on the given Sharkey server.
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} An object with all search results is returned or an error object.
*/
export async function onlineUsersCount(
    baseUrl: string,
    apiBase: string,
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/get-online-users-count";
    const payload: object = {};
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    try {
        const postRequest: object = await fetchJSON(
            'GET',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch (e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

// Exporting everything.
export default onlineUsersCount;
