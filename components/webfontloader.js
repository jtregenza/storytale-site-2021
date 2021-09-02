// webfontloader.js
/*
webfontloader tries to access `window` as soon as required, which breaks SSR.

Furthermore, with bundlers like rollup, you cannot mix ES6 with CommonJS so having 
`require('webfontloader')` in an ES6 script (inside a function or behind a conditional, for example)
will result in `Uncaught ReferenceError: require is not defined`.

To solve this, we have a CommonJS module that returns webfontloader if we are in the browser,
or a mock object if we are in node (where SSR happens).
 */
const NullWebFont = {
	load: () => {},
  };
  const isBrowser = typeof window !== 'undefined';
  
  module.exports = isBrowser ? require('webfontloader') : NullWebFont;