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
    $scope.usuario ='';
    $scope.pass ='';
    
	//Se toma las informaciones de la base de datos, en este caso, del mock data
    mockDataService.getUserData().then(function(res){
        //alert(res.data);
        u.userData = res.data;
    });
    
    mockDataService.getEmployers().then(function(res){
        u.loggedEmployer = res.data;
        //console.log(emp.loggedEmployer);
    });
    
    mockDataService.getStudents().then(function(res){
        u.loggedStudent = res.data;
    });
    
    mockDataService.getAdmins().then(function(res){
       u.loggedAdmin = res.data 
    });
    
	//Funcion para cuando se presiona login
    $scope.submit = function() {
        //console.log($scope.usuario);
        
        for(var user in u.userData){
			//Valida el que el perfil de usuario "mock" sea el mismo que ingrese en el campo "usuario" del login
			//Perfil Estudiante = Usuario[2] & Contraseña[]  
			//Perfil Empleador = Usuario[3] & Contraseña[]
			//Perfil Administrador = Usuario[1] & Contraseña[]
            if((u.userData[user].id_perfil == $scope.usuario) ){//add: && (u.userData[user].contrasena == $scope.pass)
                for(var employer in u.loggedEmployer){
                    if(u.loggedEmployer[employer].id_usuario == u.userData[user].id_perfil){
                        userTypeService.getProfile = u.loggedEmployer[employer];
                       };                    
                }
                for(var student in u.loggedStudent){
                    if(u.loggedStudent[student].id_usuario == u.userData[user].id_perfil){
                        userTypeService.getProfile = u.loggedStudent[student];
                       };                    
                }
                for(var admin in u.loggedAdmin){
                    if(u.loggedAdmin[admin].id_usuario == u.userData[user].id_perfil){
                        userTypeService.getProfile = u.loggedAdmin[admin];
                        //console.log(u.userData[user].id_perfil);
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
