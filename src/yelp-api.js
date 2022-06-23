'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
	'AYTwXFiGVKTQ7n0KPYYAs74tm4TA3X5_inWl9CvlDRM6l56logB07kmUiIYEE21hzrPIebl8Ri-jk82xGShhvbC9lqLGNw2ljvmdbkV1JEJo6HtwEk0bdJfsk2OrYnYx';

const searchRequest = {
	// term: 'food',
	location: 'seattle',
};

const client = yelp.client(apiKey);

client
	.search(searchRequest)
	.then((response) => {
		const firstResult = response.jsonBody.businesses[0];
		const prettyJson = JSON.stringify(firstResult, null, 4);
		console.log(prettyJson);
	})
	.catch((e) => {
		console.log(e);
	});
