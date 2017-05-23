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
    this.student = false;
    this.employer = false;
    this.admin = false;
    
  });