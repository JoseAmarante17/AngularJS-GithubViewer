

// Create Module which holds controllers
let app = angular.module("myApp", []);

// Controllers

/* SYNTAX

app.controller("NAME OF CONTROLLER", function(scope)
{
    STUFF GOES HERE

    scope.papi = "gasdfs" => We attached a model to it
});

*/

app.controller("MainCtrl", function ($scope) {
    $scope.message = "Hello";
    $scope.ass = "Eat my ass ZADDY";

});

app.controller("PersonCtrl", function ($scope) {

    // Defining an object
    // it is currently only available withing the function
    const love = {
        fname: "Yira",
        lname: "Bethany",
        imageSrc: "https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517__340.jpg"
    };

    // Now we can reference it using binding expressions
    $scope.person = love;

});

app.controller("Github", function ($scope, $http) {

    // get request from a secured socket
    let promise = $http.get("https://api.github.com/users/JoseAmarante17");


    promise.then(
        // If it is valid
        function (response) {
            // create object from api call
            $scope.user = response.data;
        },

        // if it is not valid
        function (reason) {
            $scope.error = "Could not connect";
        }
    );

});




