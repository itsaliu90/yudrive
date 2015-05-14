'use strict';

var driveApp = angular.module('driveApp', []);

driveApp.controller('DriveCtrl', function ($scope, $http) {

	$scope.scoreObject = {};

	$scope.submitScore = function() {
		console.log("Score submitted!");
		$http.post('/api/scores', {scoreObject: $scope.scoreObject}).
		  success(function(data, status, headers, config) {
		    console.log("Database updated ", data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log("Error updating database ", data);
		  });
	}
});