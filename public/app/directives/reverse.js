angular.module('reverseDirective', []) 
.filter('reverse', function() {

	return function(i) {
		return i.slice().reverse();
	}

});


