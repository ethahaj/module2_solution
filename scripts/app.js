(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ctrlBuy = this;

        ctrlBuy.toBuyList = ShoppingListCheckOffService.getBuyItems();
        ctrlBuy.emptyMessage = "Everything is bought!";
        ctrlBuy.buyItem = function ($index) {
            ShoppingListCheckOffService.buyItem($index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrlBought = this;
        ctrlBought.boughtList = ShoppingListCheckOffService.getBoughtItems();
        ctrlBought.emptyMessage="Nothing bought yet.";      
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 }, { name: "chips", quantity: 5 }, { name: "coke", quantity: 2 }, { name: "nuts", quantity: 10 }, { name: "cake", quantity: 1 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function (index) {
            var boughtItem = toBuyItems.splice(index, 1);
            alreadyBoughtItems.push(boughtItem[0]);         
        }

        service.getBuyItems = function () {
            return toBuyItems;
        }

        service.getBoughtItems = function () {
            return alreadyBoughtItems;
        }

    }

})();