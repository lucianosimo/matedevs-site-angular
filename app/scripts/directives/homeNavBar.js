'use strict';  

angular.module('matedevsSiteApp')
  .directive('homeNavBar', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/partials/homeNavBar.html',
      controller: function($scope) {
        $scope.isActiveTab = [true, false];

        $scope.moveToSection = function(index) {
        	$.fn.fullpage.moveTo(index);
          $scope.changeActiveSection(index);
        }

        $scope.changeActiveSection = function(sectionIndex) {
          var tabIndex = sectionIndex - 1;
          _.forEach($scope.isActiveTab, function(tab, index) {
            if (tabIndex === index) {
              $scope.isActiveTab[index] = true;
            } else {
              $scope.isActiveTab[index] = false;
            }
          });
        }
      }
    };
});