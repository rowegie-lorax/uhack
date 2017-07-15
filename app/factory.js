;(function() {


  angular
    .module('uhack')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', 'LocalStorage', 'CONSTANTS'];


  function getDataFromAPI($http, LocalStorage, CONSTANTS) {

    return {
      get: get,
      getBalance: getBalance
    };


    function get(){
      var request = {
        accept: 'application/json',
        'x-ibm-client-secret': 'T1rS4fS0sI5nN4yY0qL8dB4gW6eT6gT7xG5wS5wH3nF4fE0bG7',
        'x-ibm-client-id': '0c45af38-3f3f-499e-94a2-c14a32728bdf'

      }
      return $http({
          method: 'GET',
          url: CONSTANTS.API_URL + 'accounts/100219364651',
          headers: request
        }).then(function(account_info) {
          return account_info.data
        }).catch(function(error) {
          return error;
        });
    }

    function getBalance(){
      var request = {
        accept: 'application/json',
        'x-ibm-client-secret': 'T1rS4fS0sI5nN4yY0qL8dB4gW6eT6gT7xG5wS5wH3nF4fE0bG7',
        'x-ibm-client-id': '0c45af38-3f3f-499e-94a2-c14a32728bdf'

      }
      return $http({
          method: 'GET',
          url: CONSTANTS.API_URL + 'accounts/100219364651',
          headers: request
        }).then(function(account_info) {
          return account_info.data[0].current_balance;
        }).catch(function(error) {
          return error;
        });
    }
  }


})();
