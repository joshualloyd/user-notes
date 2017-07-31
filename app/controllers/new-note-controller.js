'use strict';

notesApp.controller('NewNoteController', function($scope){
  $scope.noteObj = {
    contents: "",
    uid: UserFactory.getUser()
  };

  $scope.saveTodoItem = () => {
    NoteFactory.postNewNote($scope.noteObj)
    .then( (data) => {
      console.log("new note data", data);
      $window.location.href = '#!/notes';
    });
  };
});