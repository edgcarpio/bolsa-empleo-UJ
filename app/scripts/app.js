'use strict';

/**
 * @ngdoc overview
 * @name jobApp
 * @description
 * # jobApp
 *
 * Main module of the application.
 */
angular
  .module('jobApp', ['ui.router','ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/login');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
      .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signin', {
        url: '/signin',
        parent: 'base',
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('studentHome', {
        url: '/student',
        parent: 'dashboard',
        templateUrl: 'views/students/studentHome.html',
        controller: 'studentCtrl'
      })
      .state('employerHome', {
        url: '/employer',
        parent: 'dashboard',
        templateUrl: 'views/employers/employerHome.html',
        controller: 'employerCtrl'
      })
      .state('reports', {
        url: '/reports',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/reports.html'
      })
      .state('editProfile', {
        url: '/profile',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/profile.html'
      });
  });