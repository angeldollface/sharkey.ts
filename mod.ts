/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Exporting everything from the "network"
// module.
export { fetchJSON } from './src/network.ts';

// Exporting everything from the "search" module.
export { searchForUser } from './src/search.ts';

// Exporting everything from the "notes" module.
export { createTextNoteForUser, deleteNoteForUser, getUserNotes} from './src/notes.ts';

// Exporting everything from the "timeline" module.
export { globalTimeline, instanceTimeline, mentionedTimeline } from './src/timeline.ts';

// Exporting everything from the "user" module.
export { getUserInfo, getUserFollowers, getUserFollowing, followUser, unfollowUser } from './src/user.ts';
