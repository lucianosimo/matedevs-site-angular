'use strict';

angular.module('matedevsSiteApp')
  .directive('fullPageInit', ['$timeout', 
    function($timeout) {
    return {
      link: function(scope, element, attr) {
        $timeout(function() {

          $(document).ready(function() {
            $('#fullpage').fullpage({
              css3: false,
              
              onLeave: function(index, nextIndex, direction) {
                if (!_.isUndefined(nextIndex)) {
                  scope.changeActiveSection(nextIndex);
                }
              }
            });
          });
          
        });
      }
    };
  }]);