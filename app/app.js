'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.home',
  'myApp.view',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'view',
      url: '/view',
      templateUrl: 'view/view.html',
      controller: viewCtrl
    })
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'home/home.html',
      controller: homeCtrl
    })
   $urlRouterProvider.when('', '/');
});