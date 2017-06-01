# World Wide Travel Exercise

*This is my first upload and I have it all working correctly*

**This was done using angular**

## Requirements
For this project you need to use Angular to list a collection of travel guides in the DOM. Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view. The view needs to list all book titles, which type of book it is, and the price for the book.

Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:

Directives:
ng-app="<your module name>"
ng-controller="bookCtrl"
ng-repeat="book in books"
A call to the data folder for guides.json using $http
Use the $q service to wrap your http call in a promise
$scope.books = <your array of guide books data>
