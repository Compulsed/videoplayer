videoPlayer.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');

  // Now set up the states
  $stateProvider

    // APP
    .state('app', {
      url: '/',
      templateUrl: 'partials/layout.html',
      controller: function($state) {
        $state.transitionTo('app.home'); // Default
      },
    })

    // APP.HOME
    .state('app.home', {
      url: 'home',
      views: {
        'content-pane': {
          templateUrl: 'partials/app.home.content.html',
          controller: function($scope, $state) {
            $scope.title = 'content-home';
          },
        },
        'side-pane': {
          templateUrl: 'partials/app.home.side.html',
          controller: function($scope, $state) {
            $scope.title = 'side-home';
          },
        },
      },
    })

    // APP.VIDEO
    .state('app.video', {
      url: 'video',
      views: {
        content: {
          templateUrl: 'partials/app.video.html',
          controller: function($scope, $state) {
            $scope.videosToPlay = [1, 2, 3, 4, 5];
            $state.transitionTo('app.video.player.home');
          },
        },
      },
    })

    // APP.VIDEO.PLAYER
    .state('app.video.player', {
      url: '',
      views: {
        'content-pane': {
          templateUrl: 'partials/app.video.content.html',
          controller: function($scope, $state) {
            $scope.title = 'content-video';
            $state.transitionTo('app.video.player.home'); // Default
          },
        },
        'side-pane': {
          templateUrl: 'partials/app.video.side.html',
          controller: function($scope, $state) {
            $scope.title = 'side-video';
          },
        },
      },
    })
    .state('app.video.player.home', {
      url: '/',
      views: {
        'video-player': {
          templateUrl: 'partials/app.video.content.home.html',
        },
      },
    })
    .state('app.video.player.vid', {
      url: '/:videoID',
      views: {
        'video-player': {
          controller: function($scope, $stateParams) {
            console.log($stateParams.videoID);
            $scope.videoID = $stateParams.videoID;
          },
          templateUrl: 'partials/app.video.content.vid.html',
        },
      },
    });
});
