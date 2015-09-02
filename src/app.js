(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){

        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
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
            ]
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
            ]
        }
    ];
})();
