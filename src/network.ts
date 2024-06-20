export async function fetchJSON(
    method: string,
    headers: Headers,
    params: Object,
    reqUrl: string
): Promise<Object> {
    const postRequest = await fetch(
        reqUrl, {
            method: method,
            headers: headers,
            body: JSON.stringify(params),
        } 
    );
    let json: Object = await postRequest.json();
    return json;
}

export default fetchJSON;