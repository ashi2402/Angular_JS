App.controller('myCntrl', ['$scope', '$http', '$route', function($scope, $http, $route) {
    $http.get('http://localhost:3030/multiple').then(function (response) {
        console.log(response);
        $scope.records = response.data;
    });

    $scope.addNewCompany = function () {
        var dataObj = {
           name_id: $scope.name_id, name: $scope.name
        };
        var res = $http.post('/save', dataObj);
        res.success(function (data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function (data, status, headers, config) {
            alert("error");
        });

        // Reload this page again

        // $http.get('http://localhost:3030/multiple').then(function (response) {
        //     console.log(response);
        //     $scope.records = response.data;
        // });

        $scope.name_id= "";
        $scope.name = "";
        $route.reload();
    };

    // $scope.companies = [
    //     { 'name':'Infosys Technologies',
    //         'employees': 125000,
    //         'headoffice': 'Bangalore',
    //          src: '../image/inter.png'
    //     },
    //     { 'name':'Cognizant Technologies',
    //         'employees': 100000,
    //         'headoffice': 'Bangalore'},
    //     { 'name':'Wipro',
    //         'employees': 115000,
    //         'headoffice': 'Bangalore'},
    //     { 'name':'Tata Consultancy Services (TCS)',
    //         'employees': 150000,
    //         'headoffice': 'Bangalore'
    // }];
    // $scope.addNewCompany = function () {
    //     $scope.companies.push({
    //         'name':$scope.name,
    //         'employees': $scope.employees,
    //         'headoffice': $scope.headoffice
    //     });
    //     var dataObj = {
    //         name: $scope.name, employee: $scope.employees, headoffice:$scope.headoffice
    //     };
    //
    //     var res = $http.post('/save', dataObj);
    //
    //     res.success(function(data, status, headers, config) {
    //         $scope.message = data;
    //         alert("data send successfully")
    //     });
    //     res.error(function(data, status, headers, config) {
    //         alert( "error");
    //     });

        // $scope.name = "";
        // $scope.employees = "";
        // $scope.headoffice = ""
    // }


    //  images fetch from DB
    // $http.get('http://localhost:3030/img').then(function (response) {
    //     console.log(response);
    //     $scope.imgSrc = response.data;
    // });
}
    ]);

