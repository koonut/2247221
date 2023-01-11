(function () {
    'use strict';

    angular.module('myApp', ["ngRoute"])

        .controller('MyController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })
        })

        .controller('createController', function ($scope) {
            $scope.createEntry = function () {
                var newData = "{\"Emp_ID\":\"" + $scope.id + "\", \"Emp_name\":\"" + $scope.name + "\", \"Emp_designation\":\"" + $scope.designation + "\", \"Emp_department\":\"" + $scope.department + "\", \"Emp_salary\":\"" + $scope.salary + "\", \"Emp_location\":\"" + $scope.location + "\"}";

                fetch('http://localhost:3000/new', {
                    method: "POST",
                    body: newData,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.id=""
                $scope.name=""
                $scope.designation=""
                $scope.department=""
                $scope.salary=""
                $scope.location=""
            };
        })

        .controller('updateController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })

            $scope.getId = function () {
                var selectedId = $scope.Emp_ID
                console.log(selectedId)
                $scope.Emp_name = selectedId['Emp_name']
                $scope.Emp_Designation = selectedId['Emp_Designation']
                $scope.Emp_department = selectedId['Emp_department']
                $scope.Emp_salary = selectedId['Emp_salary']
                $scope.Emp_location = selectedId['Emp_location']
            }

            $scope.updateEntry = function () {
                var newData =  "{\"Emp_ID\":\"" + $scope.Emp_ID[id] + "\", \"Emp_name\":\"" + $scope.Emp_name + "\", \"Emp_Designation\":\"" + $scope.Emp_Designation + "\", \"Emp_department\":\"" + $scope.Emp_department + "\", \"Emp_salary\":\"" + $scope.Emp_salary + "\", \"Emp_location\":\"" + $scope.Emp_location + "\"}";

                fetch('http://localhost:3000/update', {
                    method: "POST",
                    body: newData,
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => response.json()) 
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.id=""
                $scope.name=""
                $scope.designation=""
                $scope.department=""
                $scope.salary=""
                $scope.location=""
            };
        })

        .controller('searchController', function ($scope, $rootScope) {
            $scope.getData = function () {
                var searchJson = { department: $scope.department }
                var jsonObj = JSON.stringify(searchJson)
                fetch('http://localhost:3000/search', {
                    method: "POST",
                    body: jsonObj,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    $scope.datas = json
                })
                .catch(err => console.log(err))
            }
        })

        .controller('deleteController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })
            $scope.deleteEntry = function () {
                var delJson = { delID: $scope.del.Emp_ID }
                var jsonObj = JSON.stringify(delJson)

                fetch('http://localhost:3000/delete', {
                    method: "POST",
                    body: jsonObj,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.del = ""
            }
        })

        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "view.html"
                })
                .when("/create", {
                    templateUrl: "create.html",
                    controller: "createController"
                })
                .when("/update", {
                    templateUrl: "update.html",
                    controller: "updateController"
                })
                .when("/search", {
                    templateUrl: "search.html",
                    controller: "searchController"
                })
                .when("/delete", {
                    templateUrl: "delete.html",
                    controller: "deleteController"
                });
        })
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }])
})();