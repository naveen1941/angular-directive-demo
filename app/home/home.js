'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.donorsList = [];
        $scope.donor = {};
        $scope.donorDummy1 = {
            amount:100000,
            city:"Hyderabad",
            firstName:"Naveen",
            lastName:"Kumar",
            postalCode:"50825",
            reason:"Hello, this is the life so this makes me inspired."
        };
        $scope.donorDummy2 = {
            amount:100000,
            city:"Dubai",
            firstName:"Naveen",
            lastName:"Chittipolu",
            postalCode:"50825",
            reason:"Hello, this is the life so this makes me inspired."
        };
        for(var i=0;i<2;i++){
            $scope.donorsList.push($scope.donorDummy1);
            $scope.donorsList.push($scope.donorDummy2);
        }
        $scope.addDonor = function (form) {
            if(form.$valid){
                $scope.donorsList.push($scope.donor);
                $scope.donor = {};
                $scope.donorForm.$setPristine();
                $scope.donorForm.$setUntouched();
            }
        }
    }]);