(function(){

    angular
      .module('myLogin', [])
      .directive('login', ['AuthService', loginDirective])
      .controller('RegistrationController', registrationController)
      .factory('AuthService', authService);

    function loginDirective(){
      return {
        restrict:'E',
        controller:loginController,
        controllerAs:'loginCtrl',
        templateUrl:'login_template.html'
      };
    };

    function loginController(AuthService, $scope){

      $scope.title = '';
      $scope.authenticate = authenticate;

      function authenticate()
      {
        AuthService.authenticate($scope.email, $scope.password)
          .then(
            function(token){

              $scope.title = 'Token: ' + token;
              $scope.email = undefined;
              $scope.password = undefined;
            },
            function(reason){
            $scope.title = 'Error: ' + reason;
          });
      }
    }

    function authService($q, $http){
      var svc = {
        authenticate : authenticate
      };
      return svc;

      function authenticate(email, password){
        var defer = $q.defer();

        if (email == 'bm2yogi@gmail.com' && password == 'P@ssw0rd') {
          defer.resolve('newToken');
        }
        else {
          defer.reject('errorMessage');
        }

        return defer.promise;
      }
    };

    function registrationController($scope){
      var registration = $scope;
      registration.email = '';
      registration.password = '';
      registration.confirmPassword = '';

      $scope.register = function()
      {
        app.currentUser = {
          email:registration.email,
          password:registration.password
        };
        registration = {};
      }

    }

})();