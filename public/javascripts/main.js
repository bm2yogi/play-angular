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

	main.controller('NFCWestController', function($scope){
		$scope.conference="NFC West",
		$scope.teams=[
			{name:'Seahawks',city:'Seattle'},
			{name:'Cardinals',city:'Arizona'},
			{name:'49ers',city:'San Francisco'},
			{name:'Rams',city:'St. Louis'}
		];
	});

	main.directive('nfcSouthDirective', function($scope){
		var conf = $scope;
		return{
			restrict:"E",
			templateUrl:"team-list.html",
			controller: function(conf){
				conf.conference="NFC South",
				conf.teams=[
					{name:"Falcons",city:"Atlanta"},
					{name:"Panthers",city:"Carolina"},
					{name:"Bucaneers",city:"Tampa Bay"},
					{name:"Saints",city:"New Orleans"}
				];
			}
		};
	});

	main.controller('NFCEastController', function(){
		this.conference="NFC East",
		this.teams=[
			{name:"Eagles",city:"Philadelphia"},
			{name:"Cowboys",city:"Dallas"},
			{name:"Giants",city:"New York"},
			{name:"Redskins",city:"Washington"}
		];
	});

	main.directive('nfcNorthDirective', function(){
		return{
			restrict:"E",
			templateUrl:"team-list.html",
			controllerAs: "conf",
			controller: function(){
				this.conference="NFC North",
				this.teams=[
					{name:"Lions",city:"Detroit"},
					{name:"Vikings",city:"Minnesota"},
					{name:"Bears",city:"Chicago"},
					{name:"Packers",city:"Green Bay"}
				];
			}
		};
	});

})();