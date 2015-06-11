'use strict';

/**
 * @ngdoc overview
 * @name cravaApp
 * @description
 * # cravaApp
 *
 * Main module of the application.
 */
angular
    .module('cravaApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'angularFileUpload'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/survey', {
                templateUrl: 'views/survey.html',
                controller: 'MainCtrl'
            })
            .when('/wells', {
                templateUrl: 'views/wells.html',
                controller: 'MainCtrl'
            })
            .when('/prior', {
                templateUrl: 'views/prior.html',
                controller: 'MainCtrl'
            })
            .when('/horizons', {
                templateUrl: 'views/horizons.html',
                controller: 'MainCtrl'
            })
            .when('/output', {
                templateUrl: 'views/output.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
