;(function() {

  angular
    .module('uhack')
    .controller('MainController', MainController)
    .controller('StoreController', StoreController)
    .controller('ProfileController', ProfileController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope'];
  ProfileController.$inject = ['LocalStorage', 'getDataFromAPI', '$scope'];
  StoreController.$inject = ['LocalStorage', 'QueryService', '$scope'];

  function MainController(LocalStorage, QueryService, $scope) {

    $scope.user = {};
    $scope.errors = false;
    $scope.isAuthenticated = false;

    $scope.getAuthentication = function(){
      if (LocalStorage.get('isAuthenticated') !== null){
        $scope.isAuthenticated = LocalStorage.get('isAuthenticated');
      }
    }
    

    $scope.login = function(){
      if($scope.user.username === 'uhack' && $scope.user.password === 'uhack123'){
        LocalStorage.update('isAuthenticated', true);
        window.location.reload();
      }else{
        $scope.errors = true;
      }

    };
  }

  function ProfileController(LocalStorage, getDataFromAPI, $scope) {


    getDataFromAPI.get().then(function(data){
      $scope.account_info  = data ;
    });
    
    $scope.logout = function(){
      var choice = confirm("Are you sure want to logout ?");
      if (choice){
        LocalStorage.remove('isAuthenticated');
        window.location.reload();
      }
    };
  }

  function StoreController(LocalStorage, QueryService, $scope) {


    
  }


})();