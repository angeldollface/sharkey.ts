/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

/**
 * Attempts to fetch a response with the given
 * paramaters.
 * @param {string} method
 * @param {Headers} headers
 * @param {object} params
 * @param {string} reqUrl
*/
export async function fetchJSON(
    method: string,
    headers: Headers,
    params: object,
    reqUrl: string
): Promise<object> {
    try{
        const postRequest = await fetch(
            reqUrl, {
                method: method,
                headers: headers,
                body: JSON.stringify(params),
            } 
        );
        const json: object = await postRequest.json();
        return json;
    }
    catch(e){
        const errorObject: object = {"error": e.to_String()};
				return errorObject;
    }
}

export default fetchJSON;