'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:empEditCtrl
 * @description
 * # empEditCtrl
 * Controller to edit employees
 */
angular.module('jobApp')
  .controller('empEditCtrl', function(userTypeService, mockDataService, $scope, $stateParams, $location) {
    $scope.jobsList = this;
    $scope.jobOBJ = this;
    $scope.jobID = $stateParams.jobID;
    
    $scope.studyAreas = [
       {'description' : 'Ingeniería de Software'},         
       {'description' : 'Administracion de Base de Datos'},
       {'description' : 'Redes y Comunicaciones'},
       {'description' : 'Soporte Técnico'}
     ];
    
    $scope.empTypes = [
       {'description' : 'Fijo'},         
       {'description' : 'Contratado'},
       {'description' : 'Temporal'},
       {'description' : 'Indefinido'}
     ];
    
    $scope.workingDays = [
       {'description' : 'Tiempo Completo'},         
       {'description' : 'Medio Tiempo'},
       {'description' : 'Flexible'},
       {'description' : 'Indefinido'}
     ];
    
    //console.log();
    
    //$scope.selectedJobArea = $scope.jobOBJ.tipo_empleo;
    
    /*$scope.selectJobType = function(){
        for(var jobType in $scope.jobTypes){
            if($scope.jobTypes[jobType].description == $scope.jobOBJ.tipo_empleo){
                $scope.selectedJobType = {description: $sco}
            }
        }
        
    };*/
    
    mockDataService.getEmployees().then(function(res){
        $scope.jobsList = res.data;
        //$scope.getEmployeesByEmployer($scope.userData.id_empleador);
    });
    
    $scope.getJobByID = function(){
        for(var job in $scope.jobsList){
           if($scope.jobsList[job].id_empleo == $scope.jobID){
               $scope.jobOBJ = $scope.jobsList[job];
               //$scope.selectedJobArea = $scope.jobOBJ.area_estudio;
           };
       };
    };
    
    
  });