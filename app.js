'use strict';

let notesApp = angular.module('notes', ['ngRoute']);

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
			templateUrl: 'partials/note-list.html',
			controller: 'NoteListController',
		})
		.when('/new', {
			templateUrl: 'partials/note-form.html',
			controller: 'NewNoteController'
		});
});