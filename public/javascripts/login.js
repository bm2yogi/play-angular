(function(){

    angular
      .module('myLogin', [])
      .directive('login', loginDirective)
      //.controller('LoginController', loginController)
      .controller('RegistrationController', registrationController);

    function loginDirective(){
      return {
        restrict:'E',
        controller:loginController,
        controllerAs:'loginCtrl',
        templateUrl:'login_template.html'
      };
    };

    function loginController($scope){

      $scope.email = 'ffff';
      $scope.password = 'dddd';
      $scope.title = 'Foo';
      $scope.authenticate = authenticate;

      function authenticate(email, password)
      {
        console.log('email = ' + email);
        console.log('password = ' + password);
      }
    }

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