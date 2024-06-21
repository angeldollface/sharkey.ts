/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { getUserInfo } from './user.ts';
import { fetchJSON } from './network.ts';

// Attempts to retrieve the notes a user
// has posted. The username of the user needs
// to be specified, the Misskey/Sharkey instance that they
// are on, the base API route and the URL to said instance.
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
        throw 'Could not retrieve user ID to complete this request!';
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
        throw e;
    }
}

// Attempts to create a note containing only
// text.
export async function createTextNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    visibility: string,
    msg: string,
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
        cw: msg,
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
        throw e;
    }
}

// Deletes a note for a user who owns the supplied
// API Token with the supplied URL to the Misskey/Sharkey instance, 
// the id of the note and the route to the instance's API.
export async function deleteNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/delete";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        i: apiToken,
        noteId: noteId
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
        throw e;
    }
}

// Attempts to like a note with the supplied id
// for a user who owns the  supplied API token on a supplied 
// instance through the supplied basic API route.
export async function likeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/favorites/create";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        noteId: noteId,
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
        throw e;
    }
}

// Attempts to unlike a note with the supplied id
// for a user who owns the  supplied API token on a supplied 
// instance through the supplied basic API route.
export async function unlikeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/favorites/delete";
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const payload: object = {
        noteId: noteId,
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
        throw e;
    }
}

export default {
    getUserNotes,
    likeNoteForUser,
    unlikeNoteForUser,
    deleteNoteForUser,
    createTextNoteForUser
}