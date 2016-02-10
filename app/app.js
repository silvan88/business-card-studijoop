var studijoopApp = angular.module('studijoop', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

studijoopApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "partials/home.html"
        });
});