;(function() {
  

  'use strict';

  angular
    .module('uhack')
    .directive('myslider', slider);

  function slider() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        scope.$watch(function() {
          angular.element(document).ready(function() {
            $('.slider').owlCarousel({
              autoPlay: 2500,
              items: 1,
              //singleItem: true,
              margin: 0,
              nav: true,
              dots: false,
              navText: '',
              pauseOnHover: true
            });
          });
        });

        // keyboard navigation
        $(document).keyup(function(i) {
          if (i.keyCode == 37) {
            $('.gallery').trigger('prev.owl.carousel');
          } else if (i.keyCode == 39) {
            $('.gallery').trigger('next.owl.carousel');
          }
        });

      }
    };

    return directiveDefinitionObject;
  }

})();