/*
SHARKEY.TS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

// Importing all APIs
// for testing.
import * as sharkey from '../mod.ts';

// Importing the API to test equality.
import { assertEquals } from "@std/assert";

// Basic variables that will not
// change.
const apiBase: string = "/api";
const server: string = "blahaj.zone";
const userName: string = "angeldollface666";
const baseUrl: string = "https://blahaj.zone";
const apiToken: string = (Deno.env.get("BLAHAJ_API_TOKEN") as string);
