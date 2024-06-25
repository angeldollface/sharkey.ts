# SHARKEY.TS :shark: :sauropod:

![GitHub CI](https://github.com/angeldollface/sharkey.ts/actions/workflows/deno.yml/badge.svg)

***A Typescript library for Deno to interact with Sharkey, a Mastodon alternative. :shark: :sauropod:***

## ABOUT :books:

This library for Deno is there to interact with Sharkey from Typescript. I wrote this to prototype a library in another programming language and get a feel for Sharkey's API routes.

## USAGE :hammer:

### APIs

To get the documentation for this library, please visit this library's documentation pages [here](https://angeldollface.boo/sharkey.ts). Please also take care to import ***Sharkey.ts*** via an HTTP import or by adding it to your Deno project. The documentation gives inaccurate information on imports (This is not down to me, this is a known issue with Deno.).

You can import any of ***Sharkey.ts's*** APIs by adding the following line to your Typescript file:

```Typescript
import { functionName } 'https://deno.land/x/sharkey/mod.ts';
```

`functionName` represents any of the function signatures present in the documentation pages.

### EXAMPLE

To get a feel for how to use ***Sharkey.ts***, please read the unit tests located in [`mod_test.ts`](mod_test.ts).

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to GitHub.
- Upload to [deno.land/x](https://deno.land/x).

### Version 0.2.0

- [x] Added the `userExists` function.
- [x] Added the `getUserFromToken` function.
- [ ] More detailed, improved documentation.
- [x] Improve the way test variables are handled.
- [x] Renamed the `src/checker.ts` module to `src/checkers.ts`.

## NOTE :scroll:

- *Sharkey.ts :shark: :sauropod:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the [DSL v1](https://github.com/angeldollface/doll-software-license).
