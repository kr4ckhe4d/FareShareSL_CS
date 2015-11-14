angular.module('starter.controllers', [])

 

.controller('FareShareController', function($scope, Chats) {
    
    
    
    
    
    
    
    
    
    
    
 
 
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
