'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.home',
  'myApp.view',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  // Add any state you need here.

  $stateProvider
    .state({
      name: 'view',
      url: '/view',
      templateUrl: 'modules/view/view.html',
      controller: viewCtrl
    })
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'modules/home/home.html',
      controller: homeCtrl
    })

    // By default
   $urlRouterProvider.when('', '/');
});