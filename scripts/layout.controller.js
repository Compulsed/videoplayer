(function() {
  'use strict';

  angular
    .module('videoPlayer')
    .controller('LayoutController', LayoutController);

  function LayoutController($state) {
    this.title = "COOL TITLE";
    this.test = $state.current.data.test;
  }

})();
