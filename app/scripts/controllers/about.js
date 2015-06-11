'use strict';

/**
 * @ngdoc function
 * @name cravaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cravaApp
 */
angular.module('cravaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
