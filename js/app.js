angular.module('selfLearning', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/home/homeTemplate.html',
                controller: 'homeControl'
            })
            .state('bmx', {
                url: '/bmx',
                templateUrl: 'js/bmx/bmxTemplate.html',
                controller: 'bmxControl'
            })
            .state('mtb', {
                url: '/mtb',
                templateUrl: 'js/mtb/mtbTemplate.html',
                controller: 'mtbControl'
            });

        $urlRouterProvider
            .otherwise('/');

    });
