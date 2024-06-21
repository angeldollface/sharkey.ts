/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Makes a request to the supplied URL
// with the parameters supplied. The method must be supplied,
// the headers via a "Headers" instance, any payload via an object
// and the URL as a string.
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
        throw e;
    }
}

export default fetchJSON;