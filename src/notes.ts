/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { getUserInfo } from './user.ts';
import { fetchJSON } from './network.ts';

/**
 * Attempts to retrieve the notes a user
 * has posted. The username of the user needs
 * to be specified, the Misskey/Sharkey instance that they
 * are on, the base API route, and the URL to said instance.
 * If the retrieval fails, an error object is returned.
 * @param {string} userName
 * @param {string} server
 * @param {string} apiBase
 * @param {string} baseUrl
 * @returns {Promise<object>} An object of all a user's notes is returned or an error object.
*/
export async function getUserNotes(
    userName: string, 
    server: string,
    apiBase: string,
    baseUrl: string
): Promise<object> {
    const userInfo: object = await getUserInfo(
        userName, 
        server, 
        baseUrl, 
        apiBase
    );
    let userId: string = '';
    if (Object.prototype.hasOwnProperty.call(userInfo, 'id')){
        userId = new Map(Object.entries(userInfo)).get('id');
    }
    else {
        return ({"error":"Could not retrieve user ID to complete this request!"} as object);
    }
    const reqUrl: string = baseUrl + apiBase + "/users/notes";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        userId: userId
    };
    try {
        const postRequest: object = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Attempts to create a note containing only text.
 * If you are unclear about parameters that need to
 * be supplied, refer to this library's unit tests.
 * These can be found in the file "mod_test.ts".
 * If the operation of posting a note fails, an error
 * object is returned.
 * @param {string} apiBase
 * @param {string} baseUrl
 * @param {string} apiToken
 * @param {string} visibility
 * @param {string} msg
 * @param {boolean} localOnly
 * @param {boolean} reactionAcceptance
 * @param {boolean} noExtractMentions
 * @param {boolean} noExtractHashtags
 * @param {boolean} noExtractEmojis
 * @param {string} string
 * @returns {Promise<object>} An object of the posted note is returned or an error object.
*/ 
export async function createTextNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    visibility: string,
    localOnly: boolean,
    reactionAcceptance: string,
    noExtractMentions: boolean,
    noExtractHashtags: boolean,
    noExtractEmojis: boolean,
    note: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/create";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        visibility: visibility,
        localOnly: localOnly,
        reactionAcceptance: reactionAcceptance,
        noExtractMentions: noExtractMentions,
        noExtractHashtags: noExtractHashtags,
        noExtractEmojis: noExtractEmojis,
        text: note,
        i: apiToken
    };
    try {
        const postRequest: object = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Deletes a note for a user who owns the supplied
 * API Token with the supplied URL to the Misskey/Sharkey instance, 
 * the ID of the note, and the route to the instance's API.
 * If the operation fails, an error is returned.
 * @param {string} apiBase
 * @param {string} baseUrl
 * @param {string} apiToken
 * @param {string} noteId
 * @returns {Promise<object>} A success object is returned or an error object.
*/
export async function deleteNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/delete";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload = {
        noteId: noteId,
        i: apiToken,
    } as object;
    try {
        const postRequest: object = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Attempts to like a note with the supplied ID
 * for a user who owns the  supplied API token on a supplied 
 * instance through the supplied basic API route.
 * @param {string} apiBase
 * @param {string} baseUrl
 * @param {string} apiToken
 * @param {string} noteId
 * @returns {Promise<object>} A success object is returned or an error object.
*/
export async function likeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/reactions/create";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        i: apiToken,
				noteId: noteId,
				reaction: "like",
    };
    try {
        const postRequest: object = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Attempts to unlike a note with the supplied ID
 * for a user who owns the  supplied API token on a supplied 
 * instance through the supplied basic API route.
 * @param {string} apiBase
 * @param {string} baseUrl
 * @param {string} apiToken
 * @param {string} noteId
 * @returns {Promise<object>} A success object is returned or an error object.
*/
export async function unlikeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/reactions/delete";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        noteId: noteId,
				reaction: "like",
        i: apiToken
    };
    try {
        const postRequest: object = await fetchJSON(
            'POST',
            headers,
            payload,
            reqUrl
        );
        return postRequest;
    }
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

// Exporting everything.
export default {
    getUserNotes,
    likeNoteForUser,
    unlikeNoteForUser,
    deleteNoteForUser,
    createTextNoteForUser
}