'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')

  .controller('SigninCtrl', function($scope, $location) {
    $scope.student = "Estudiante";
    $scope.employer = "Empleador";
    
    $scope.studentForm = false;
    $scope.employerForm = false;
    $scope.userTypeSelect = true;
    
    $scope.submit = function(userType) {
        
        if(userType == $scope.student){
            $scope.userTypeSelect = false;
            $scope.employerForm = false;
            $scope.studentForm = true;            
           //$location.path('/dashboard');
           }
        
        else if(userType == $scope.employer){
            $scope.userTypeSelect = false;
            $scope.studentForm = false;
            $scope.employerForm = true;
           //$location.path('/login');
           }
        
        else {$location.path('/login')}      

      return false;
    }

  });