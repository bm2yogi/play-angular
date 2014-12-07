(function(){
    'use strict;'

    angular
        .module('products', [])
        .directive('productPanel', productPanel)
        .directive('productReviewEditor', productReviewEditor)
        .directive('productReview', productReview);

    function productPanel(){
        return{
            restrict:'E',
            templateUrl:'product-panel.html',
            controller: productPanelController,
            controllerAs:'tab'
        };
    }

    function productPanelController(){
                this.current = 1;
                this.activate = function(tab){
                    this.current = tab;
                };
                this.isActive = function(tab){
                    return this.current === tab;
                };
            }

    function productReviewEditor(){
        return{
            restrict:'E',
            templateUrl:'product-review-editor.html',
            controllerAs:'reviewCtrl',
            controller: productReviewEditorController
        };
    }

    function productReviewEditorController(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    }

    function productReview(){
        return{
            restrict:"E",
            templateUrl:"product-review.html"
        };
    }
})();