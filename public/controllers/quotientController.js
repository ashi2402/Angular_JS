App.controller('quotientDetails', ['$scope', '$http', function($scope, $http){

    $http.get('http://localhost:3030/quotetype').then(function(response) {
        console.log(response);
        $scope.records= response.data;
    });
    $scope.addNewCompany = function (id) {
        $scope.id = id;
        $http.get('http://localhost:3030/quotetype/:id').then(function(response) {
            console.log(response);
            $scope.details= response.data;
        });
    }
}]);