/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

// Importing all APIs
// for testing.
import * as sharkey from './mod.ts';

// Importing the API to test equality.
import { assertEquals } from "@std/assert";
import { objectIsErrorResponse } from "./src/checkers.ts";

// Basic variables that will not
// change.
const resultCount: number = 50;
const apiBase: string = "/api";
const searchResultCount: number = 5;
const visibility: string = "public";
const reaction: string = "likeOnly";
const server: string = "blahaj.zone";
const impossibleUser: string = "markzuck";
const followTestSubject: string = "frisaf";
const userName: string = "angeldollface666";
const baseUrl: string = "https://blahaj.zone";
const noteToBeLiked: string = "9utzyrsmyoof00hr";
const apiToken: string = (Deno.env.get("BLAHAJ_API_TOKEN") as string);
const noteToBeDeletedText: string = "This note only exists to be deleted.";
const testNoteText: string = "Posted from the test runner of \"Sharkey.ts\".";

/* "./src/notes.ts TESTS START */

Deno.test(
	"Testing the \"likeNoteForUser\" function.",
	async () => {
		const likedNote: object = await sharkey.likeNoteForUser(
			apiBase,
			baseUrl,
			apiToken,
			noteToBeLiked
		);
		assertEquals(sharkey.objectIsErrorResponse(likedNote), (false));
	}
);

Deno.test(
	"Testing the \"unlikeNoteForUser\" function.",
	async () => {
		const unlikedNote: object = await sharkey.unlikeNoteForUser(
			apiBase,
			baseUrl,
			apiToken,
			noteToBeLiked
		);
		assertEquals(sharkey.objectIsErrorResponse(unlikedNote), (false));
	}
);

Deno.test(
	"Testing the \"getUserNotes\" function.",
	async () => {
		const userNotes: object = await sharkey.getUserNotes(
			userName,
			server,
			apiBase,
			baseUrl
		);
		assertEquals(sharkey.objectIsErrorResponse(userNotes), (false));
	}
);

Deno.test(
	"Testing the \"createTextNoteForUser\" function.",
	async () => {
		const createdNote: object = await sharkey.createTextNoteForUser(
			apiBase,
			baseUrl,
			apiToken,
			visibility,
			false,
			reaction,
			true,
			true,
			true,
			testNoteText
		);
		assertEquals(sharkey.objectIsErrorResponse(createdNote), (false));
	}
);

Deno.test(
	"Testing the \"deleteNoteForUser\" function.",
	async () => {
		const newNote: object = await sharkey.createTextNoteForUser(
			apiBase,
			baseUrl,
			apiToken,
			visibility,
			false,
			reaction,
			true,
			true,
			true,
			noteToBeDeletedText
		);
		if (sharkey.objectIsErrorResponse(newNote) === false){
			if (Object.prototype.hasOwnProperty.call(newNote, 'createdNote')){
				const actualNote: object = new Map(Object.entries(newNote)).get('createdNote');
				const id: string = new Map(Object.entries(actualNote)).get('id');
				const deletedNote: object = await sharkey.deleteNoteForUser(
					apiBase,
					baseUrl,
					apiToken,
					id
				);
				assertEquals(sharkey.objectIsErrorResponse(deletedNote), (false));
			}
		}
		else {
			throw 'Note to be deleted could not be created!';
		}
	}
);

/* "./src/notes.ts TESTS END */

/* "./src/timeline.ts TESTS START */

Deno.test(
	"Testing the \"instanceTimeline\" function.",
	async () => {
		const instanceTl: object = await sharkey.instanceTimeline(
			baseUrl,
			apiBase,
			false,
			false,
			false,
			resultCount
		);
		assertEquals(sharkey.objectIsErrorResponse(instanceTl), (false));
	}
);

Deno.test(
	"Testing the \"globalTimeline\" function.",
	async () => {
		const globalTl: object = await sharkey.globalTimeline(
			baseUrl,
			apiBase,
			false,
			false,
			false,
			resultCount
		);
		assertEquals(sharkey.objectIsErrorResponse(globalTl), (false));
	}
);

Deno.test(
	"Testing the \"mentionedTimeline\" function.",
	async () => {
		const mentionedTl: object = await sharkey.mentionedTimeline(apiToken,
			baseUrl,
			apiBase,
			resultCount,
			true,
			visibility
		);
		assertEquals(sharkey.objectIsErrorResponse(mentionedTl), (false));
	}
);

/* "./src/timeline.ts TESTS END */

/* "./src/search.ts TESTS START */

Deno.test(
	"Testing the \"searchForUser\" function.",
	async () => {
		const searchResults: object = await sharkey.searchForUser(
			userName,
			server,
			baseUrl,
			apiBase,
			searchResultCount
		);
		assertEquals(sharkey.objectIsErrorResponse(searchResults), (false));
	}
);

/* "./src/search.ts TESTS END */

/* "./src/user.ts" TESTS START */

Deno.test(
	"Testing the \"getUserInfo\" function.",
	async () => {
		const userInfo: object = await sharkey.getUserInfo(
			userName,
			server,
			baseUrl,
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(userInfo), (false));
	}
);

Deno.test(
	"Testing the \"followUser\" function.",
	async () => {
		const fUser: object = await sharkey.followUser(
			followTestSubject,
			server,
			apiToken,
			baseUrl,
			apiBase,
			true,
		);
		assertEquals(sharkey.objectIsErrorResponse(fUser), (false));
	}
);

Deno.test(
	"Testing the \"unfollowUser\" function.",
	async () => {
		const ufUser: object = await sharkey.unfollowUser(
			followTestSubject,
			server,
			apiToken,
			baseUrl,
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(ufUser), (false));
	}
);

Deno.test(
	"Testing the \"getUserFollowing\" function.",
	async () => {
		const userFollowing: object = await sharkey.getUserFollowing(
			userName,
			server,
			baseUrl,
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(userFollowing), (false));
	}
);

Deno.test(
	"Testing the \"getUserFollowers\" function.",
	async () => {
		const userFollowers: object = await sharkey.getUserFollowers(
			userName,
			server,
			baseUrl,
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(userFollowers), (false));
	}
);

Deno.test(
	"Testing the \"getUserFromToken\" function.",
	async () => {
		const userFetched: object = await sharkey.getUserFromToken(
			baseUrl,
			apiBase,
			apiToken
		);
		assertEquals(sharkey.objectIsErrorResponse(userFetched), (false));
	}
);

/* "./src/user.ts" TESTS END */

/* "./src/checkers.ts" TESTS START */

Deno.test(
	"Testing the \"userExists\" function. (true case)",
	async () => {
		const userIs: boolean = await sharkey.userExists(
			userName,
			server,
			baseUrl,
			apiBase
		);
		assertEquals(userIs, (true));
	}
);

Deno.test(
	"Testing the \"userExists\" function. (false case)",
	async () => {
		const userIs: boolean = await sharkey.userExists(
			impossibleUser,
			server,
			baseUrl,
			apiBase
		);
		assertEquals(userIs, (false));
	}
);

/* "./src/checkers.ts" TESTS END */

/* "./src/meta.ts" TESTS START */

Deno.test(
	"Testing the \"onlineUsersCount\" function.",
	async () => {
		const userCount: object = await sharkey.onlineUsersCount(
			baseUrl,
			apiBase
		);
		assertEquals(objectIsErrorResponse(userCount), (false));
	}
);

/* "./src/meta.ts" TESTS END */