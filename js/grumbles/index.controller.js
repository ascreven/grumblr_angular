(function () {

  'use strict';

  angular
  .module('grumbles')
  .controller('GrumbleIndexController', [
    GrumbleIndexControllerFunction
  ]);

  function  GrumbleIndexControllerFunction () {
    this.grumbles = grumbles;
    this.newGrumble = {};
    this.create = function () {
      grumbles.push(this.newGrumble);
      this.newGrumble = {};
    };
  }

})();
