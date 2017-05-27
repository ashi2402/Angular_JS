
App.controller('registerController', registerController);
function registerController($scope, $http){
    $scope.register = function () {
        var dataObj = {
            username: $scope.username, password: $scope.password
        };
        var res = $http.post('/registerData', dataObj);
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

        $scope.username= "";
        $scope.password = "";
        $route.reload();
    };

    // factory

  app.factory('myFactory', function () {
      var name = 'hello';
      var service = {};
      service.getName = function () {
          return name;
      }
      return service
  })

    //service

    app.service('myService', function () {
        var name = 'hello';
        this.getName = function () {
            return name;
        }
    })
};

