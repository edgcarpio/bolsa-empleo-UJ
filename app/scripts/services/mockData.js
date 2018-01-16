'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .service('mockDataService', function($http) {
    
    this.getStudyAreas = function(){
      return $http.get('../../data/area_estudio.json');  
    };
    
    this.getContacts = function(){
      return $http.get('../../data/contactos.json');  
    };
    
    this.getEmployers = function(){
      return $http.get('../../data/empleadores.json');  
    };
    
    this.getEmployees = function(){
      return $http.get('../../data/empleos.json');  
    };
    
    this.getStudents = function(){
      return $http.get('../../data/estudiantes.json');  
    };
    
    this.getAdmins = function(){
        return $http.get('../../data/administradores.json');
    };
    
    this.getOptions = function(){
      return $http.get('../../data/opciones.json');  
    };
    
    this.getProfiles = function(){
      return $http.get('../../data/perfiles.json');  
    };
    
    this.getProfilesOptions = function(){
      return $http.get('../../data/perfiles_opciones.json');  
    };
    
    this.getUserData = function(){
        return $http.get('../../data/usuarios.json');
    };
    
  });