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

// Basic variables that will not
// change.
const apiBase: string = "/api";
const server: string = "blahaj.zone";
const userName: string = "angeldollface666";
const baseUrl: string = "https://blahaj.zone";
const noteToBeLiked: string = "9utzyrsmyoof00hr";
const apiToken: string = (Deno.env.get("BLAHAJ_API_TOKEN") as string);

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
			"public",
			false,
			"likeOnly",
			true,
			true,
			true,
			"Posted from the test runner of \"Sharkey.ts\"."
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
			"public",
			false,
			"likeOnly",
			true,
			true,
			true,
			"This note only exists to be deleted."
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
			50
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
			50
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
			50,
			true,
			"public"
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
			5
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
			"frisaf",
			"blahaj.zone",
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
			"frisaf",
			"blahaj.zone",
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
			"Akane3",
			"misskey.io",
			"https://misskey.io",
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(userFollowing), (false));
	}
);

Deno.test(
	"Testing the \"getUserFollowers\" function.",
	async () => {
		const userFollowers: object = await sharkey.getUserFollowers(
			"Akane3",
			"misskey.io",
			"https://misskey.io",
			apiBase
		);
		assertEquals(sharkey.objectIsErrorResponse(userFollowers), (false));
	}
);

/* "./src/user.ts" TESTS END */