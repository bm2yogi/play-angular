(function(){
	'use strict';

	angular
		.module('myapp',['products', 'myLogin'])
		.controller('MainController',['$http','monkey', mainController])
		.controller('NFCWestController', nfcWestController)
		.controller('NFCEastController', nfcEastController)
		.directive('nfcNorthDirective', nfcNorthDirective)
		.factory('monkey', monkeyFactory);

function nfcWestController($scope){
		$scope.conference="NFC West",
		$scope.teams=[
			{name:'Seahawks',city:'Seattle'},
			{name:'Cardinals',city:'Arizona'},
			{name:'49ers',city:'San Francisco'},
			{name:'Rams',city:'St. Louis'}
		];
	}

	function nfcEastController(){
		this.conference="NFC East",
		this.teams=[
			{name:"Eagles",city:"Philadelphia"},
			{name:"Cowboys",city:"Dallas"},
			{name:"Giants",city:"New York"},
			{name:"Redskins",city:"Washington"}
		];
	}

	function nfcNorthDirective(){
		return{
			restrict:"E",
			templateUrl:"team-list.html",
			controllerAs: "conf",
			controller: nfcNorthController
		};
	}

	function nfcNorthController(){
		this.conference="NFC North",
		this.teams=[
			{name:"Lions",city:"Detroit"},
			{name:"Vikings",city:"Minnesota"},
			{name:"Bears",city:"Chicago"},
			{name:"Packers",city:"Green Bay"}
		];
	};

	function monkeyFactory(){
		return function(data){
			return 'monkey ' + data;
		};
	}

	function mainController($http, monkey){
		var store = this;
		store.products = [];

		$http.get('/products.json').success(function(data){
			console.log(monkey("business."))
			store.products = data;
		});
	};

})();