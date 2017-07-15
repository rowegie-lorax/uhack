;(function() {


  'use strict';
  angular
    .module('uhack')
    .factory('QueryService', [
      '$http', '$q', 'CONSTANTS', QueryService
    ]);

  function QueryService($http, $q, CONSTANTS) {


    var service = {
      query: query
    };

    return service;

    function query(method, url, params, data) {
      return $http({
          method: 'GET',
          url: CONSTANTS.ETSY_URL + 'listings/active?api_key=z14pv8xipibhc9i3vjthwrhf',
          data: 'jsonp'
        }).then(function(product) {
          return product.data;
        }).catch(function(error) {
          return error;
        });
    }

  }

})();
