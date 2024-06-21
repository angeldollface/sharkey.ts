import * as sharkey from '../mod.ts';

const apiBase: string = "/api";
const server: string = "blahaj.zone";
const userName: string = "angeldollface666";
const baseUrl: string = "https://blahaj.zone";
const apiToken: string = (Deno.env.get("BLAHAJ_API_TOKEN") as string);

console.log(apiToken);

async function main(): Promise<void> {
    const myNotes: object = await sharkey.getUserNotes(
        userName,
        server,
        apiBase,
        baseUrl
    );
    console.log('Notes:');
    console.log(myNotes);
    console.log('\n\n');

    const createdNote: object = await sharkey.createTextNoteForUser(
        apiBase,
        baseUrl,
        apiToken,
        "public",
        "This note was sent from the the Sharkey.ts test script!",
        false,
        "likeOnly",
        false,
        false,
        false,
        "."
    );

    console.log('Note created:');
    console.log(createdNote);
    console.log('\n\n');

    const noteNuked: object = await sharkey.deleteNoteForUser(
        apiBase,
        baseUrl,
        apiToken,
        "9usnc5u8yjyu01i4"
    );

    console.log('Note deleted:');
    console.log(noteNuked);
    console.log('\n\n');
}

main();