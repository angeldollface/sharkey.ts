/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

/**
 * Searches for a user on the given server with the given username,
 * the given baseurl, and basic API route and with the supplied number
 * of results. The number of results cannot exceed 99.
 * @param {string} userName
 * @param {string} server
 * @param {string} baseUrl
 * @param {string} apiBase
 * @param {number} resultCount
 * @returns {Promise<object>} An object with all search results is returned or an error object.
*/
export async function searchForUser(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string,
    resultCount: number
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/users/search-by-username-and-host";
    const payload: object = {
        limit: resultCount,
        detail: false,
        username: userName,
        host: server
    };
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    try {
        const postRequest: object = await fetchJSON(
            'POST',
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
export default searchForUser;
