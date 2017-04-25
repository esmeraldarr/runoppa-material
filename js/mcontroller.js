function TestCtrl($scope) {
  $scope.selected = {};
  
  $scope.data =  [
    {"id":"113000",
      "name":"Size",
      "values":
          [{"id":"92029","name":"Size A"},
           {"id":"92030","name":"Size B"}]
    },
    {"id":"113002",
      "name":"Color",
      "values":
          [{"id":"94029","name":"Blue"},
           {"id":"94030","name":"Black"}]
    }
    ];
  
  $scope.$watch('selected.id', function(id){
    delete $scope.selected.value;
    angular.forEach($scope.data, function(attr){
      if(attr.id === id){
        $scope.selectedAttr = attr;
      }
    });
  });
}