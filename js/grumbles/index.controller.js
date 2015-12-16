(function () {

  'use strict';

  angular
  .module('grumbles')
  .controller('GrumbleIndexController', [
    'GrumbleFactory',
    GrumbleIndexControllerFunction
  ]);

  function  GrumbleIndexControllerFunction (GrumbleFactory) {
    this.grumbles = GrumbleFactory.query();
  //   this.newGrumble = {};
  //   this.create = function () {
  //     grumbles.push(this.newGrumble);
  //     this.newGrumble = {};
  //   };
  }

})();
