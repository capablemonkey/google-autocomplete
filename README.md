google-autocomplete
===================

Lightweight module that lets you easily fetch google's autocomplete suggestions for a given seed term.  

Getting Started
===============

Do this:

```js
auto = require('autocomplete');
auto.getQuerySuggestions('house', function(err, suggestions) {
	console.log(suggestions);
})
```

To get this:

```js
[
	{ suggestion: 'house of cards', relevance: 750, type: 'QUERY' },
	{ suggestion: 'house of prime rib', relevance: 600, type: 'QUERY' },
	{ suggestion: 'house of cards season 3', relevance: 566, type: 'QUERY' },
	{ suggestion: 'house of cards season 2', relevance: 565, type: 'QUERY' }
]
```

Reference
=========

1. `autocomplete.getQuerySuggestions(query, callback)` fetches all `QUERY` `type` results (other types of results include `NAVIGATION`, `IMAGE`, and more).  Expects a standard callback function to provide (err, result) arguments to.

2. `autocomplete.getAllSuggestions(query, callback)` fetches all types of suggestion types (result set will include things like places and images, see above).  Expects a standard callback function to provide (err, result) arguments to.

Both methods return an array of objects which include a `relevance` score based on Google Search's judgment.  See the above sample for example.