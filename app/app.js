var myApp = angular.module('studijoop', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "",
            templateUrl: "partials/view.html"
        });
});