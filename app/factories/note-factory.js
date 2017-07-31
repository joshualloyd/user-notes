'use strict';

notesApp.factory('NoteFactory', function($http, $q, FirebaseUrl) {

	let postNewNote = (newNote) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseUrl}notes.json`,
        angular.toJson(newNote))
      .then( (newNoteData) => {
        resolve(newNoteData);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  let getNote = (noteId) => {
  	return $q( (resolve, reject) => {
  		$http.get(`${FirebaseUrl}notes/${noteId}.json`)
  		.then( (noteData) => {
  			resolve(noteData);
  		})
  		.catch((err)=>{
  			reject(err);
  		})
  	});
  };

  return {postNewNote};

});