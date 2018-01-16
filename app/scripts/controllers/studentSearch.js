'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:studentSearchCtrl
 * @description
 * # studentSearchCtrl
 * Controller to display and search students
 */
angular.module('jobApp')
  .controller('studentSearchCtrl', function(userTypeService, mockDataService, $scope, $location) {
    
    $scope.student = userTypeService.student;
    $scope.employer = userTypeService.employer;
    $scope.admin = userTypeService.admin;
    $scope.userData = userTypeService.getProfile;
    
    $scope.studentList = this;
    $scope.isStudentSelected = false;
    $scope.selectedStudent = {id: null, user_id: null, study_area: null, name: null, last_name: null, date_birth: null, registration: null, email: null, tel_1: null, cel: null, desc_profile: null};
   
    $scope.setSelected = function(selectedStudent){
        if(selectedStudent == null){
            
            $scope.selectedStudent.id = selectedStudent;
            $scope.selectedStudent.user_id = selectedStudent;
            $scope.selectedStudent.study_area = selectedStudent;
            $scope.selectedStudent.name = selectedStudent;
            $scope.selectedStudent.last_name = selectedStudent;
            $scope.selectedStudent.date_birth = selectedStudent;
            $scope.selectedStudent.registration = selectedStudent;
            $scope.selectedStudent.email = selectedStudent;
            $scope.selectedStudent.tel_1 = selectedStudent;
            $scope.selectedStudent.cel = selectedStudent;
            $scope.selectedStudent.desc_profile = selectedStudent;
           }
        else{
            $scope.selectedStudent.id = selectedStudent.id_empleo;
            $scope.selectedStudent.user_id = selectedStudent.id_usuario;
            $scope.selectedStudent.study_area = selectedStudent.area_estudio;
            $scope.selectedStudent.name = selectedStudent.nombre;
            $scope.selectedStudent.last_name = selectedStudent.apellido;
            $scope.selectedStudent.date_birth = selectedStudent.fecha_nacimiento;
            $scope.selectedStudent.registration = selectedStudent.matricula;
            $scope.selectedStudent.email = selectedStudent.email;
            $scope.selectedStudent.tel_1 = selectedStudent.tel_1;
            $scope.selectedStudent.cel = selectedStudent.cel;
            $scope.selectedStudent.desc_profile = selectedStudent.desc_perfil;
            
        }
        $scope.isStudentSelected = !$scope.isStudentSelected;
    }
    
    mockDataService.getEmployees().then(function(res){
        $scope.jobsList = res.data;
        $scope.getEmployeesByEmployer($scope.userData.id_empleador);
    });
    
    mockDataService.getEmployers().then(function(res){
       $scope.employersList = res.data;
        
    });
    
    mockDataService.getStudents().then(function(res){
       $scope.studentList = res.data; 
    });
    
  });