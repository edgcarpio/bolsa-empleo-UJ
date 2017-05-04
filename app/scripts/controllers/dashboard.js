'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.student = false;
    $scope.employer= false;
    $scope.admin = true;
    $scope.$state = $state;
  });