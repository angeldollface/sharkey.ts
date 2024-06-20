import { fetchJSON } from './network.ts';

export async function instanceTimeline(
    baseUrl: string,
    apiBase: string,
    withFiles: boolean,
    withRenotes: boolean,
    withReplies: boolean,
    noteCount: number
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/local-timeline";
    let payload: Object = {
        withFiles: withFiles,
        withRenotes: withRenotes,
        withReplies: withReplies,
        limit: noteCount
    };
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function globalTimeline(
    baseUrl: string,
    apiBase: string,
    withFiles: boolean,
    withRenotes: boolean,
    withReplies: boolean,
    noteCount: number
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/global-timeline";
    let payload: Object = {
        withFiles: withFiles,
        withRenotes: withRenotes,
        withReplies: withReplies,
        limit: noteCount
    };
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export async function mentionedTimeline(
    baseUrl: string,
    apiBase: string,
    noteCount: number,
    fromFollowing: boolean,
    visibility: string
): Promise<Object> {
    let reqUrl: string = baseUrl + apiBase + "/notes/mentions";
    let payload: Object = {
        following: fromFollowing,
        limit: noteCount,
        visibility: visibility
    };
    let headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const postRequest = await fetchJSON(
        'POST',
        headers,
        payload,
        reqUrl
    );
    return postRequest;
}

export default {
    globalTimeline,
    instanceTimeline,
    mentionedTimeline
};