var request = require('request');

exports.getAllSuggestions = function(string, callback) {
	searchURL = "http://suggestqueries.google.com/complete/search?client=chrome&q=";

	request(searchURL + encodeURIComponent(string), function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
		  	result = JSON.parse(body);
		  	suggestions = result[1].map(function(suggestion, index) {
		  		return {
		  			suggestion: suggestion,
		  			relevance: result[4]['google:suggestrelevance'][index],
		  			type: result[4]['google:suggesttype'][index]
		  		};
		  	});
		  	callback(null, suggestions);
  		}
  		else callback(error);
	});
};

exports.getQuerySuggestions = function(string, callback) {
	exports.getAllSuggestions(string, function(error, suggestions) {
		if (error) callback(error);

		filtered = suggestions.filter(function(suggestion) {
			return suggestion.type == "QUERY";
		});

		callback(null, filtered);
	});
};