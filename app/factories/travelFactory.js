"use strict";


app.factory("travelFactory", function($q, $http){

    let getGuide= () =>{
        return $q((resolve,reject)=>{
            $http.get("./data/guides.json")
            .then((obj)=>{
                let x= obj.data.guides;
                console.log("guide collection", x);
                resolve(x);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getGuide};
});
