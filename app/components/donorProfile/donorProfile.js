'use strict';
angular.module('myApp')
    .directive('donorProfile', function () {
        return {
            name: 'donorProfile',
            scope: {
                donor: '='
            },
            controller: 'DonorProfileCtrl',
            restrict: 'AE',
            templateUrl: 'components/donorProfile/donorProfile.html'
        };
    });
