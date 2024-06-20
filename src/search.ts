import { fetchJSON } from './network.ts';

export async function searchForUser(
    userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string,
    resultCount: number
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/users/search-by-username-and-host";
    let payload: Object = {
        limit: resultCount,
        detail: false,
        username: userName,
        host: server
    };
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export default searchForUser;