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
    }

  }

})();
