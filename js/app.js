
(function () {
'use strict';

  angular
    .module('grumblr', [
      'ui.router',
      'grumbles'
    ])
    .config([
      '$stateProvider',
      '$locationProvider',
      RouterFunction
    ]);

    function RouterFunction($stateProvider) {
      $stateProvider
        .state('grumbleIndex', {
          url: '/grumbles',
          templateUrl: 'js/grumbles/index.html',
          controller: 'GrumbleIndexController',
          controllerAs: 'GrumbleIndexViewModel'
        })
        .state('grumbleShow', {
          url: '/grumbles/:id',
          templateUrl: 'js/grumbles/show.html',
          controller: 'GrumbleShowController',
          controllerAs: 'GrumbleShowViewModel'
        });
    }

})();
