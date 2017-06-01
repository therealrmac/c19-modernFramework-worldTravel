"use strict";

var app= angular.module("WorldTravelApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl: "partials/template.html",
        controller: "bookctrl"
    });
});
