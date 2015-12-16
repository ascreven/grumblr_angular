(function () {

  'use strict';

  angular
  .module('grumbles')
  .factory('GrumbleFactory', [
    '$resource',
    FactoryFunction
  ]);

  function FactoryFunction  ($resource) {
    return $resource('http://localhost:3000/grumbles/:id');
  }
})();
