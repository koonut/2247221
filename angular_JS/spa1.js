angular.module('myapp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/home',
            {
                templateUrl: 'home.html',
                controller: 'homectrl'
            }).when('/employee',
                {
                    templateUrl: 'employee.html',
                    controller: 'empctrl'
                }).when('/paygrade',
                    {
                        templateUrl: 'paygrade.html',
                        controller: 'payctrl'
                    })
    })
    .controller('myctrl', function () {

    })
    .controller('payctrl', function ($scope, $http) {
        $http.get('https://bidura.github.io/web_stack_development/paygrade.json')
        .success(function (response) {
            $scope.paygrade = response.records;
        })

    })

    .controller("homectrl", function ($scope) {
        $scope.message = "Hello employee/admin this is the Home Page"
        $scope.message2 = "Click on employee to visit the list of employees"
        $scope.message3 = "Click on paygrade to check all the paygrades"

    })
    .controller("empctrl", function ($scope, $http) {
        $http.get('https://bidura.github.io/web_stack_development/employee.json')
            .success(function (response) {
                $scope.employees = response.records;
            })
    })
