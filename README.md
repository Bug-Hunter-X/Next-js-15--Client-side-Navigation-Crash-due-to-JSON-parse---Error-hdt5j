# Next.js 15 Client-Side Navigation Crash

This repository demonstrates a common error in Next.js 15 applications where client-side navigation to a page that attempts to parse data from `localStorage` results in a crash if the data is null or not valid JSON.

## Bug Description

The `/about` page tries to parse JSON data stored in `localStorage`. If `localStorage.getItem('user')` returns `null` or an invalid JSON string, `JSON.parse()` throws an error, causing the entire application to crash and display a blank page.  This is often difficult to debug as the error happens during client-side rendering and is not caught by standard error handling.

## Solution

The solution involves adding error handling using a `try...catch` block to gracefully handle the situation where `localStorage.getItem('user')` returns null or invalid JSON, preventing the application from crashing.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.  The application will crash unless the user data is present in local storage as valid JSON.

## Related Issues

* [Next.js issue tracker](https://github.com/vercel/next.js/issues) (Search for similar issues)
