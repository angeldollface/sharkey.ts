/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

import { fetchJSON } from './network.ts';

/**
 * Returns an object of all notes and activity on the local
 * Misskey/Sharkey instance taking the supplied parameters into
 * account.
 * @param {string} baseUrl
 * @param {string} apiBase
 * @param {boolean} withFiles
 * @param {boolean} withRenotes
 * @param {boolean} withReplies
 * @param {number} noteCount
 * @returns {Promise<object>} An object of all the notes and other activity is returned or an error object. An error object is returned if failres are enocuntered.
*/
export async function instanceTimeline(
    baseUrl: string,
    apiBase: string,
    withFiles: boolean,
    withRenotes: boolean,
    withReplies: boolean,
    noteCount: number
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/local-timeline";
    const payload: object = {
        withFiles: withFiles,
        withRenotes: withRenotes,
        withReplies: withReplies,
        limit: noteCount
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
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns an object of all the notes and other activity on all instances
 * networked with the supplied instance of Misskey/Sharkey.
 * @param {string} baseUrl
 * @param {string} apiBase
 * @param {boolean} withFiles
 * @param {boolean} withRenotes
 * @param {boolean} withReplies
 * @param {number} noteCount
 * @returns {Promise<object>} Returns an object of all notes and other activity on all instances networked with the supplied instance of Misskey/Sharkey. An error object is returned if failures are encountered.
*/
export async function globalTimeline(
    baseUrl: string,
    apiBase: string,
    withFiles: boolean,
    withRenotes: boolean,
    withReplies: boolean,
    noteCount: number
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/global-timeline";
    const payload: object = {
        withFiles: withFiles,
        withRenotes: withRenotes,
        withReplies: withReplies,
        limit: noteCount
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
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

/**
 * Returns an object containing all notes in which the user has been mentioned.
 * @param {string} apiToken
 * @param {string} baseUrl
 * @param {string} apiBase
 * @param {number} noteCount
 * @param {boolean} fromFollowing
 * @param {string} visibility
 * @returns {Promise<object>} Returns an object containing all the notes a user has been mentioned in or an error object.
*/
export async function mentionedTimeline(
	apiToken: string,
    baseUrl: string,
    apiBase: string,
    noteCount: number,
    fromFollowing: boolean,
    visibility: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/mentions";
    const payload: object = {
		i: apiToken,
        following: fromFollowing,
        limit: noteCount,
        visibility: visibility
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
    catch(e){
        return ({"error":{"msg":e.toString()}} as object);
    }
}

// Exports everything.
export default {
    globalTimeline,
    instanceTimeline,
    mentionedTimeline
};
