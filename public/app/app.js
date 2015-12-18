angular.module('MyApp', ['reverseDirective','storyCtrl', 'storyService','appRoutes','userCtrl','userService','mainCtrl', 'authService'])

.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
})