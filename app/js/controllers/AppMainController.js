/*global define*/
define(['./module'], function(controllerModule) {
  controllerModule.controller('AppMainController', ['$scope',
    function($scope) {
      $scope.app = {};
      $scope.app.appName = 'Angular Material RequireJS Seed';
      $scope.app.author = {
        name: 'Nisheed Jagadish',
        email: 'nisheedj@thoughtworks.com'
      };

      $scope.app.appRepo = "https://github.com/nisheedj/angular-material-requirejs-seed.git";

      $scope.getAuthorName = function(){
        return $scope.app.author.name;
      };
    }
  ]);
});