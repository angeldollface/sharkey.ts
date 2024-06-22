/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { getUserInfo } from "./user.ts";

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
	if (Object.prototype.hasOwnProperty.call(subject, "error")){
		result = true;
	}
	else {
		// Do nothing.
	}
	return result;
}

/**
 * Returns a boolean that describes
 * whether the supplied username
 * exists on the supplied Sharkey/Misskey
 * server.
 * @param {string} userName
 * @param {string} server
 * @param {string} baseUrl
 * @param {string} apiBase
 * @returns {Promise<object>} Returns a boolean that describes whether a user exists on the supplied Sharkey/Misskey instance.
*/
export async function userExists(
	userName: string, 
    server: string,
    baseUrl: string,
    apiBase: string,
): Promise<boolean> {
	const userInfo: object = await getUserInfo(
		userName,
		server,
		baseUrl,
		apiBase
	);
	let result: boolean = false;
	if (objectIsErrorResponse(userInfo) === false){
		result = true;
	}
	else {
		// Do nothing.
	}
	return result;
}

// Exporting everything.
export default {
	userExists,
	objectIsErrorResponse
};
