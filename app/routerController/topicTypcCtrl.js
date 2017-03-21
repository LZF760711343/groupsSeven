/**
 * Created by Administrator on 2016/10/20.
 */
angular.module('myapp').controller('topicTypcCtrl',function ($scope,$stateParams,itemService) {


    console.log($stateParams.id);
    if($stateParams.id==''|| $stateParams.id==undefined){
        $scope.typeId=1;
        $scope.topictypes=itemService.topicTypes(1);
    }else{
        $scope.topictypes=itemService.topicTypes($stateParams.id);
        $scope.typeId=$stateParams.id;
    };
    
    
}); 