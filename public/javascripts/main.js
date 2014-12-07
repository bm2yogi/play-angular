(function(){
	'use strict';

	angular
		.module('myapp',['products', 'myLogin'])
		.controller('MainController',['productsService', mainController])
		.controller('NFCWestController', nfcWestController)
		.controller('NFCEastController', nfcEastController)
		.directive('nfcNorthDirective', nfcNorthDirective)
		.directive('navbar', navbar)
		.factory('productsService', productsService);

	function navbar(){
		return {
			restrict:'E',
			templateUrl:'navbar.html'
		};
	}

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

	function productsService($http){
		var svc = {
			get: get
		}

		return svc;

		function get(callback){
			$http.get('/products.json')
				.success(callback);
		}

	}

	function mainController(productsService){
		var store = this;
		store.products = [];

		productsService.get(function(data){
			store.products = data;
		});
	}
})();