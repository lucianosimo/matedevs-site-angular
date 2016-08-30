'use strict';

angular.module('matedevsSiteApp')
  .controller('HomeCtrl', function ($scope, $timeout) {

  	$scope.pttPlayer;

  	$scope.ptt = {
  		gameplayVideo: 'https://www.youtube.com/watch?v=A6NTpP5Y5wQ?rel=0'
  	}

  	$scope.stopVideo = function() {
  		$timeout(function() {
  			if (!_.isUndefined($scope.pttPlayer)) {
  				$scope.pttPlayer.pauseVideo();
  			}
  		}, 1250);
  	}

  });
