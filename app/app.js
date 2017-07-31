'use strict';

let notesApp = angular.module('notes', ['ngRoute'])
.constant("FirebaseUrl", "https://notes-f2723.firebaseio.com/");

notesApp.config(($routeProvider) => {
	$routeProvider
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'RegisterController'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		})
		.when('/notes', {
			templateUrl: 'partials/noteList.html',
			controller: 'NoteListController',
		})
		.when('/new', {
			templateUrl: 'partials/noteForm.html',
			controller: 'NewNoteController'
		})
		.otherwise('/');
});