App.controller('lobeDetails', ['$scope', '$http', function($scope, $http){

    $http.get('http://localhost:3030/lobetype').then(function(response) {
        console.log(response);
        $scope.records= response.data;
    });
}]);