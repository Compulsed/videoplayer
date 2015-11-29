(function(){
  'use strict';

  angular
    .module('videoPlayer')
    .controller('HomeController', HomeController);

  function HomeController($scope) {
    $scope.items = ['A', 'List', 'Of', 'Items'];

    $scope.pressMe = function() {
      console.log('Button pressed!');
    };

  }

})();
