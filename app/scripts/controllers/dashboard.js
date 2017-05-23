'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .controller('DashboardCtrl', function(userTypeService, $scope, $state) {
    $scope.student = userTypeService.student;
    $scope.employer = userTypeService.employer;
    $scope.admin = userTypeService.admin;    
    $scope.$state = $state;
    
    
  });