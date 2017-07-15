;(function() {


  'use strict';

  angular.module('uhack')
    .directive('responsiveNav', responsiveNav);


  function responsiveNav() {
    
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/responsive-nav.html',
      link: function(scope, elem, attrs, ctrl) {
      	elem.on('click', function(e) {
      		$('.responsive-wrapper').slideToggle( 150, 'swing');
          e.preventDefault();
      	});
      }
    };

    return directiveDefinitionObject;
  }


})();