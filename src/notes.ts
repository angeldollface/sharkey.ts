import { getUserInfo } from './user.ts';
import { fetchJSON } from './network.ts';

export async function getUserNotes(
    userName: string, 
    server: string,
    apiBase: string,
    baseUrl: string
): Promise<Object> {
    let userInfo: Object = await getUserInfo(
        userName, 
        server, 
        baseUrl, 
        apiBase
    );
    let userId: string = userInfo.id;
    let reqUrl: string = baseUrl + apiBase + "/users/notes";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    let payload: Object = {
        userId: userId
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

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
    channelId: string,
    note: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/create";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    let payload: Object = {
        visibility: visibility,
        cw: msg,
        localOnly: localOnly,
        reactionAcceptance: reactionAcceptance,
        noExtractMentions: noExtractMentions,
        noExtractHashtags: noExtractHashtags,
        noExtractEmojis: noExtractEmojis,
        channelId: channelId,
        text: note
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function deleteNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/create";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    let payload: Object = {
        noteId: noteId
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function likeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/favorites/create";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    let payload: Object = {
        noteId: noteId
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function unlikeNoteForUser(
    apiBase: string,
    baseUrl: string,
    apiToken: string,
    noteId: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/favorites/delete";
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', apiToken);
    let payload: Object = {
        noteId: noteId
    };
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export default {
    getUserNotes,
    likeNoteForUser,
    unlikeNoteForUser,
    deleteNoteForUser,
    createTextNoteForUser
}