(function(){
  'use strict';

  angular
    .module('videoPlayer')
    .controller('FunController', FunController);

  function FunController() {
    this.fun = 'Fun is really fun!';
  }

})();
