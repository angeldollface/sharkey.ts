/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

/**
 * Checks whether a JSON response is a Sharkey/Misskey
 * error response or not.
 * @param {object} subject
 * @returns {boolean} Returns either "true" or "false" depending on whether the response's first key is "error" or not.
*/
export function objectIsErrorResponse(
	subject: object
): boolean {
	let result: boolean = false;
	if (subject.hasOwnProperty("error")){
		// Do nothing.
	}
	else {
		result = true;
	}
	return result;
}

export default objectIsErrorResponse;
