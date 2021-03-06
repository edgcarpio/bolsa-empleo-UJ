'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:employerCtrl
 * @description
 * # employerCtrl
 * Controller of employers
 */
angular.module('jobApp')
  .controller('employerCtrl', function(userTypeService, mockDataService, $scope, $location) {
    
    $scope.student = userTypeService.student;
    $scope.employer = userTypeService.employer;
    $scope.admin = userTypeService.admin;
    $scope.userData = userTypeService.getProfile;
    
    
    //$scope.var = $scope.getEmployeesByEmployer(1);
    //console.log();
    
    $scope.jobsList = this;
    $scope.employerJobList = [];
    //console.log($scope.employerJobList);
    $scope.studyAreasList = this;
    $scope.employersList = this;
    //$scope.loggedEmployerName = function;
    $scope.isJobSelected = false;
    $scope.selectedJob = {id: null, studyArea: null, employer: null, title: null, detail: null, salary: null, creation_date: null, schedule: null, type: null};
   
    $scope.setSelected = function(selectedJob){
        if(selectedJob == null){
            $scope.selectedJob.id = selectedJob;
            $scope.selectedJob.studyArea = selectedJob;
            $scope.selectedJob.employer = selectedJob;
            $scope.selectedJob.title = selectedJob;
            $scope.selectedJob.detail = selectedJob;
            $scope.selectedJob.salary = selectedJob;
            $scope.selectedJob.creationDate = selectedJob;
            $scope.selectedJob.schedule = selectedJob;
            $scope.selectedJob.type = selectedJob;
           }
        else{
            $scope.selectedJob.id = selectedJob.id_empleo;
            $scope.selectedJob.studyArea = $scope.getAreaName(selectedJob.id_area_estudio);
            $scope.selectedJob.employer = $scope.getEmployerName(selectedJob.id_empleador);
            $scope.selectedJob.title = selectedJob.titulo;
            $scope.selectedJob.detail = selectedJob.detalle;
            $scope.selectedJob.salary = selectedJob.salario;
            $scope.selectedJob.creationDate = selectedJob.fecha_creacion;
            $scope.selectedJob.schedule = selectedJob.horario;
            $scope.selectedJob.type = selectedJob.tipo_empleo;
        }
        $scope.isJobSelected = !$scope.isJobSelected;
    }
    
    mockDataService.getEmployees().then(function(res){
        $scope.jobsList = res.data;
        $scope.getEmployeesByEmployer($scope.userData.id_empleador);
    });
    
    mockDataService.getStudyAreas().then(function(res){
        $scope.studyAreasList = res.data;
    });
    
    mockDataService.getEmployers().then(function(res){
       $scope.employersList = res.data;
        
    });
    
    $scope.getEmployerName = function(employerId){
        //console.log("getEmployerName");
       for(var employer in $scope.employersList){
           if($scope.employersList[employer].id_empleador == employerId){
               $scope.loggedEmployerName = $scope.employersList[employer].nombre_empresa;
               return $scope.employersList[employer].nombre_empresa;
           };
       };
    };
    
     $scope.getEmployeesByEmployer = function(employerId){
        //console.log("getEmployerName");
       for(var job in $scope.jobsList){
           if($scope.jobsList[job].id_empleador == employerId){
               $scope.employerJobList.push($scope.jobsList[job]);
           };
       };
    };
    
    $scope.getAreaName = function(areaId){
        //console.log("getAreaName");
        for(var area in $scope.studyAreasList){
            if($scope.studyAreasList[area].id_area_estudio == areaId){
                //console.log($scope.studyAreasList[0].nombre);
                return $scope.studyAreasList[area].nombre;
            }
        }
    };
    /*
    $scope.aplicar = function(){
        alert('Gracias por aplicar a este empleo! \nSe ha enviado un correo electrónico con tus datos al empleador.');
    }*/
  });