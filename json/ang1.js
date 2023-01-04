var myapp1 = angular.module("myapp1", [])
myapp1.controller("myctrl1", function ($scope, $http) {
    $http.get('http://127.0.0.1:3022/emp')
        .success(function (response) {
            $scope.names = response.people
        })
})
    .controller("myctrl2", function ($scope, $http) {
        $http.get('http://127.0.0.1:3022/pay')
            .success(function (response) {
                $scope.grades = response.paygrades
            })
    })
    .controller("myctrl3", function ($scope, $http) {
        $http.get('http://127.0.0.1:3022/dept')
            .success(function (response) {
                $scope.dept = response.dept
            })
    })