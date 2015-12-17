angular.module('storyService', [])

.factory('Story', function($http) {
	var storyFactory = {};

	storyFactory.create = function (storyData) {
		// body...
		return $http.post('/api', storyData);
	}

	storyFactory.allStory = function() {
		return $http.get('/api');
	}

})