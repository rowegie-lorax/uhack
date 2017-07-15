;(function() {

  angular
    .module('uhack')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', 'PostController'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;

    self.post();



    self.post = function(){
      var post = PostController.getPost();
      console.log(post);
    }
    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();