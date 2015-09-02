(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
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
                    thumb: 'assets/thumb.png'
                },
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.png'
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
                    thumb: 'assets/thumb.png'
                },
                {
                    full: 'assets/full.jpg',
                    thumb: 'assets/thumb.png'
                }
            ]
        }
    ];
})();
