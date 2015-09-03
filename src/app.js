(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive('productTitle', function(){
        return {
            restrict: 'E',//for Elements HTML
            templateUrl: 'src/product-title.html'
        }
    });

    app.directive('productPanels', function(){
       return  {
           restrict:'E',
           templateUrl:'src/product-panels.html',
           controller: function() {

               this.tab = 1;

               this.selectTab = function(setTab){
                   this.tab = setTab;
               };

               this.isSelected = function(checkTab) {
                   return this.tab === checkTab;
               };
           },
           controllerAs: 'panel'
       }
    });

    var gems =[
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is tha description of this product',
            canPurchase: true,
            soldOut: false,
            images:[
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.jpg'
                },
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.jpg'
                }
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'this is tha description of this product',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.jpg'
                },
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.jpg'
                }
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        }
    ];
})();
