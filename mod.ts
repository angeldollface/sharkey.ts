/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

// Exporting everything from the "network" module.
export { fetchJSON } from './src/network.ts';

// Exporting everything from the "meta" module.
export { onlineUsersCount } from './src/meta.ts';

// Exporting everything from the "search" module.
export { searchForUser } from './src/search.ts';

// Exporting everything from the "checker" module.
export { objectIsErrorResponse, userExists } from './src/checkers.ts';

// Exporting everything from the "timeline" module.
export { globalTimeline, instanceTimeline, mentionedTimeline } from './src/timeline.ts';

// Exporting everything from the "user" module.
export { getUserInfo, getUserFollowers, getUserFollowing, followUser, unfollowUser, getUserFromToken } from './src/user.ts';

// Exporting everything from the "notes" module.
export { createTextNoteForUser, deleteNoteForUser, getUserNotes, likeNoteForUser, unlikeNoteForUser } from './src/notes.ts';
