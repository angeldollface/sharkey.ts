/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import { fetchJSON } from './network.ts';

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
        throw e;
    }
}

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
        throw e;
    }
}

export async function mentionedTimeline(
    baseUrl: string,
    apiBase: string,
    noteCount: number,
    fromFollowing: boolean,
    visibility: string
): Promise<object> {
    const reqUrl: string = baseUrl + apiBase + "/notes/mentions";
    const payload: object = {
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
        throw e;
    }
}

export default {
    globalTimeline,
    instanceTimeline,
    mentionedTimeline
};