angular.module("Myitem", [])
    .filter("myfilter", function () {
        return function (input, option) {
            if (isNaN(option) || (option == "")) {
                return input;
            }
            else {
                return input.substring(0, option).toUpperCase();
            }
        }
    })
    .controller("itemCtrl", function ($scope) {
        var items = [
            { name: 'Triple Joint Dog Harness', summary: "We are Manufacturing and Trader  of Dog Harness, Pet Chews Sticks", price: 300 },
            { name: 'Dog Foot Cleaner', summary: "Comforrable for dogs, Easy to use,Heavy plastic body", price: 230 },
            { name: 'Shampoo IiLio Aloevera Shamppoo', summary: "500 ml size Shamppoo", price: 700 },
            { name: 'Dog Nail Cutter', summary: "Use for cutting dog nail", price: 370 },
            { name: 'Pgpet Pet Sound Chewing Ball', summary: "the ball make of rubber", price: 120 }
        ];
        $scope.items = items;
        $scope.rowlimit = 5;

    });