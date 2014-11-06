(function(){
	var main = angular.module('myapp',['products']);
	
	main.controller('MainController',['$http','monkey', function($http, monkey){
		var store = this;
		store.products = [];

		$http.get('/products.json').success(function(data){
			console.log(monkey("business."))
			store.products = data;
		});
	}]);

	main.factory('monkey', function(){
		return function(data){
			return 'monkey ' + data;
		};
	})

	
})();