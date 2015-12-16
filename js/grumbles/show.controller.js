(function () {

  'use strict';

  angular
  .module('grumbles')
  .controller('GrumbleShowController', [
    '$GrumbleFactory',
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction (GrumbleFactory) {
    this.grumbles = GrumbleFactory.query();
    this.grumble = grumbles[$stateParams.id];
    this.delete = function () {
      grumbles.pop(this.grumble);
    };
  }
})();
