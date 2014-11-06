(function(){
    var app = angular.module('products', []);

    app.directive('productPanel', function(){
        return{
            restrict:'E',
            templateUrl:'product-panel.html',
            controller:function(){
                this.current = 1;
                this.activate = function(tab){
                    this.current = tab;
                };
                this.isActive = function(tab){
                    return this.current === tab;
                };
            },
            controllerAs:'tab'
        };
    });

    app.directive('productReviewEditor', function(){
        return{
            restrict:'E',
            templateUrl:'product-review-editor.html',
            controllerAs:'reviewCtrl',
            controller:function(){
                this.review = {};
                this.addReview = function(product){
                    product.reviews.push(this.review);
                    this.review = {};
                };
            }
        };
    });

    app.directive('productReview', function(){
        return{
            restrict:"E",
            templateUrl:"product-review.html"
        };
    });
})();