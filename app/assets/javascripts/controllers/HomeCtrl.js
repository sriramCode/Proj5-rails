angular
    .module('myApp')
    .controller('HomeCtrl', function ($scope, $rootScope, Auth) {
        $scope.hello = "hello world";
    })