(function () {

  'use strict';

  angular
  .module('grumbles')
  .controller('GrumbleShowController', [
    'GrumbleFactory',
    '$stateParams',
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction (GrumbleFactory, $stateParams) {
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.grumbles = GrumbleFactory.query();
    this.delete = function () {
      GrumbleFactory.delete(this.grumble);
    };
  }
})();
