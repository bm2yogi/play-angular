(function(){
	var main = angular.module('myapp',[]);

	main.controller('MainController',function(){
		this.products = gems;

	});

    main.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

	main.controller('TabController', function(){
		this.current = 1;
		this.activate = function(tab){
			this.current = tab;
		};

		this.isActive = function(tab){
			return this.current === tab;
		};
	});

	var gems = [{
		name:'Foo',
		price:21.95,
		description:'Lorem ipsum dolor sit amet',
		details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		canPurchase:true,
		reviews:[
        {stars:4,body:'I love this thing',author:'jim@gmail.com'},{stars:3,body:'Best money I ever spent',author:'jack@gmail.com'},{stars:1,body:'I was not impressed',author:'john@gmail.com'},{stars:4,body:'I was very impressed',author:'phil@gmail.com'}]
	},{
		name:'Bar',
		price:12.95,
		description:'Lorem ipsum dolor sit amet',
		details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		canPurchase:true,
		reviews:[]
	},{
		name:'Zini',
		price:112.95,
		description:'Lorem ipsum dolor sit amet',
		details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		canPurchase:true,
		reviews:[]
	}];

})();