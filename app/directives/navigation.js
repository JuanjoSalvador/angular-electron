angular.module('myApp.navigation', [])
    .directive('navBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/navigation.html'
        };
    });