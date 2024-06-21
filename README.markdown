# SHARKEY.TS :shark: :sauropod:

***A Typescript library for Deno to interact with Sharkey, a Mastodon alternative. :shark: :sauropod:***

## ABOUT :books:

This library for Deno is there to interact with Sharkey from Typescript. I wrote this to prototype a library in another programming language and get a feel for Sharkey's API routes.

## TODO :gear:

- [ ] Write unit tests.
- [ ] Write documentation for all APIs.
- [ ] Upload to [deno.land/x](https://deno.land/x).
- [ ] Add GitHub CI for unit tests.
- [ ] Add comments.

## USAGE :hammer:

### APIs

- The **Network** API:
    - `fetchJSON`: Makes a request to the supplied URL with the supplied method, headers, and payload. To get more details please read the function definition in [`src/network.ts`](src/network.ts).
- The **Notes** API:
    - `createTextNoteForUser`: Attempts to create a note containing only text.
        - `apiBase`: The base API route as a string.
        - `baseUrl`: The URL to the instance as a string.
        - `apiToken`: Your API token.
        - `visibility`: Visibility setting as a string (`"public"`, `"home"`, `"followers"`, `"specified"`)
        - `msg`: A message as a string.
        - `localOnly`: Should the note be only on the home instance (boolean)?
        - `reactionAcceptance`: What sort of reactions to this note can be accepted? One of the following options can be chosen: `"likeOnly"`, `"likeOnlyForRemote"`, `"nonSensitiveOnly"`, `"nonSensitiveOnlyForLocal"`, `"LikeOnlyForRemote"`
        - `noExtractMentions`: Can be either `true` or `false`.
        - `noExtractHashtags`: Can be either `true` or `false`.
        - `noExtractEmojis`: Can be either `true` or `false`.
        - `note`: Your actual note as a string.
    - `deleteNoteForUser`:  Deletes a note for a user who owns the supplied API Token with the supplied URL to the Misskey/Sharkey instance, the id of the note and the route to the instance's API. To get more details please read the function definition in [`src/notes.ts`](src/notes.ts).
    - `getUserNotes`: Attempts to retrieve the notes a user has posted. The username of the user needs to be specified, the Misskey/Sharkey instance that they are on, the base API route and the URL to said instance. To get more details please read the function definition in [`src/notes.ts`](src/notes.ts).
    - `likeNoteForUser`: Attempts to like a note with the supplied id for a user who owns the  supplied API token on a supplied  instance through the supplied basic API route.
    - `unlikeNoteForUser`: Attempts to unlike a note with the supplied id for a user who owns the  supplied API token on a supplied  instance through the supplied basic API route.
- The **Search** API:
    - `searchForUser`:
- The **User** API:
    - `followUser`:
    - `getUserInfo`:
    - `unfollowUser`:
    - `getUserFollowers`:
    - `getUserFollowing`:
- The **Timeline** API:
    - `globalTimeline`:
    - `instanceTimeline`:
    - `mentionedTimeline`:

### EXAMPLE

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to GitHub.
- Upload to [deno.land/x](https://deno.land/x).

## NOTE :scroll:

- *Sharkey.ts :shark: :sauropod:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the [DSL v1](https://github.com/angeldollface/doll-software-license).