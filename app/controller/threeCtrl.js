

angular.module('myapp').controller('threeCtrl',function ($scope,$state,itemService) {

    $scope.subjects=itemService.subjects();
    for(var i=0;i<$scope.subjects.length;i++){
        $scope.subjects[i].url='three.html#/subject/'+$scope.subjects[i].id+'/details/'+$scope.subjects[i].id*5;
    }
});