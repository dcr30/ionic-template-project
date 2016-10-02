'use strict';

var app = angular.module('app', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
'use strict';

var app = angular.module('app');

app.controller('AppController', function ($scope, $log) {
    $log.log('Hello World');
    $scope.testMessage = 'Hello World';
});
//# sourceMappingURL=app.js.map
