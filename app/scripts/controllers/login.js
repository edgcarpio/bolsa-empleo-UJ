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
    
    var u = this;
    var emp = this;
    $scope.usuario ='';
    $scope.pass ='';
    
    mockDataService.getUserData().then(function(res){
        //alert(res.data);
        u.userData = res.data;
    });
    
    mockDataService.getEmployers().then(function(res){
        emp.loggedEmployer = res.data;
        //console.log(emp.loggedEmployer);
    });
    

    $scope.submit = function() {
        //console.log($scope.usuario);
        for(var user in u.userData){
            if((u.userData[user].id_perfil == $scope.usuario) && (u.userData[user].contrasena == $scope.pass)){
                for(var employer in emp.loggedEmployer){
                    console.log("antes de Empleador perfil 3 " + emp.loggedEmployer[employer].id_usuario);
                    if(emp.loggedEmployer[employer].id_usuario == u.userData[user].id_perfil){
                        console.log("Empleador perfil 3");
                        userTypeService.getProfile = emp.loggedEmployer[employer];
                       };
                }
                //console.log(emp.loggedEmployer[1]);
                switch(u.userData[user].id_perfil){
                    case 1:
                        userTypeService.student = false;
                        userTypeService.employer = false;
                        userTypeService.admin = true;
                        $location.path('/dashboard/admin');
                        break;
                    
                    case 2:
                        userTypeService.admin = false;
                        userTypeService.employer = false;
                        userTypeService.student = true;
                        $location.path('/dashboard/student');
                        break;
                    
                    case 3:
                        userTypeService.admin = false;
                        userTypeService.student = false;
                        userTypeService.employer = true;
                        $location.path('/dashboard/employer');
                        break;
                                                  }
                /*console.log(md.userData[user].id_perfil);
                userTypeService.admin = false;
                userTypeService.employer = true;
                userTypeService.student = false;
                $location.path('/dashboard/student');
                //console.log(userTypeService.student);*/
               };            
        };

      //$location.path('/dashboard');
      return false;
    }

  });
