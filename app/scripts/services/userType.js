'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of jobApp
 */
angular.module('jobApp')
  .service('userTypeService', function() {
    //this.student = {Id: null, userId: null, contactId: null, name: null, lastName: null, dateBirth: null, studentId: null};
    this.student = false;
    this.employer = false;
    this.admin = false;
    /*
    this.getProfile = function(idProfile){
        switch(idProfile){
            case 1:
                break;
            case 2:
                
                        }
    }*/
    
    this.getProfile = null;
  });