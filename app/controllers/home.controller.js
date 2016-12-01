'use strict';

angular.module('myApp.home', [])

  .controller('homeCtrl')
  
  homeCtrl.$inject = ['$scope']
  function homeCtrl($scope) {
      $scope.title = "Home";
  };