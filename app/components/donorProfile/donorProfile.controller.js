'use strict';
angular.module('myApp')
    .controller('DonorProfileCtrl', function ($scope) {
        var short = $scope.donor.firstName[0]+$scope.donor.lastName[0];
        short =  short.toUpperCase();
        var fullName = $scope.donor.firstName +' '+ $scope.donor.lastName;
        $scope.donor.short = short;
        $scope.donor.fullName = fullName;
    });
