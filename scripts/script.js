

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
    $scope.title = "Github Viewer"

});


app.controller("Github", function ($scope, $http) {

    //Function to search and username is passed from model created in html
    $scope.search = function (username) {
        // get request from a secured socket
        let promise = $http.get("https://api.github.com/users/" + username);

        promise.then(
            // If it is valid
            function (response) {
                // create object from api call
                $scope.user = response.data;
                $scope.error = "";
            },

            // if it is not valid
            function (reason) {
                $scope.error = "Could not connect";
            }
        );

        // Retrieves Repo information
        let repo = $http.get("https://api.github.com/users/" + username + "/repos")

        repo.then(
             // If it is valid
             function (response) {
                // create object from api call
                $scope.repoInfo = response.data;
            },

            // if it is not valid
            function (reason) {
                $scope.error = "Could not connect";
            }
        );

    };

});




