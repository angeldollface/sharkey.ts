/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

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
        throw e;
    }
}

export default searchForUser;