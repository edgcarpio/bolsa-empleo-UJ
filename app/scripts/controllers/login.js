'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .controller('LoginCtrl', function(mockDataService, userTypeService, $scope, $location) {
    
    var md = this;
    $scope.usuario ='';
    $scope.pass = '';
    
    mockDataService.getUserData().then(function(res){
        //alert(res.data);
        md.userData = res.data;
    })

    $scope.submit = function() {
        //console.log($scope.usuario);
        for(var user in md.userData){
            if(md.userData[user].id_perfil == 2){
                userTypeService.admin = false;
                userTypeService.employer = false;
                userTypeService.student = true;
                $location.path('/dashboard/student');
                //console.log(userTypeService.student);
               };            
        };

      //$location.path('/dashboard');
      return false;
    }

  });
