/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

/**
 * Attempts to fetch a response with the given
 * paramaters. These paramaters include the following:
 * - method: POST or GET
 * - headers: an instance of the "Headers" class
 * - params: a JSON payload to submit
 * - reqUrl: the URL to send the request to
 * @param {string} method
 * @param {Headers} headers
 * @param {object} params
 * @param {string} reqUrl
 * @returns {Promise<object>} A JSON response containing the requested data is returned or an error object.
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
        if (postRequest.body === null && postRequest.ok){
            return ({"action":"completed"} as object)
        }
        else {
            const json: object = await postRequest.json();
            return json;
        }
    }
    catch(e){
        return ({"error": {"msg":e.toString()}} as object);
    }
}

// Exporting everything.
export default fetchJSON;
