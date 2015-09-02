(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'this is tha description of this product'
    }
})();
