'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }

  });
