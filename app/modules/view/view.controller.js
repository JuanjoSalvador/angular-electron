'use strict';

angular.module('myApp.view', [])

  .controller('viewCtrl')
  
  viewCtrl.$inject = ['$scope']
  function viewCtrl($scope) {
      $scope.title = "Awesome view";
  };