"use strict";

app.controller("bookctrl", function($scope, travelFactory){
    travelFactory.getGuide()
    .then(function(data){
        var z=[];
        var arrayId= Object.keys(data);
        arrayId.forEach(function(key){
            z.push(data[key]);
        });
         $scope.guides= z;
        console.log('guides is', $scope.guides);
     });
});
