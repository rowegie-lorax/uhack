;(function() {

  angular
    .module('uhack', [
      'ngRoute'
    ])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
      })
      .when('/profile', {
        templateUrl: 'views/Profile.html',
        controller: 'ProfileController'
      })
      .when('/setup', {
        templateUrl: 'views/setup.html'
        // controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }

  angular
    .module('uhack')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('uhack')
    .run(run);

  run.$inject = ['$rootScope', '$location', 'LocalStorage'];

  function run($rootScope, $location, LocalStorage) {
 
    var isAuthenticated = LocalStorage.get('isAuthenticated');
    if (isAuthenticated === true){
      window.location.href = "#/profile";
    }else{
      window.location.href ="#/home";
    }
  }


})();