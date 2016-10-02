const app = angular.module('app');

app.controller('AppController', function ($scope, $log) {
    $log.log('Hello World');
    $scope.testMessage = 'Hello World';
});