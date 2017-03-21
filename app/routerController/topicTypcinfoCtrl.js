/**
 * Created by Administrator on 2016/10/22.
 */
angular.module('myapp').controller('topicTypcinfoCtrl',function ($scope,$stateParams,itemService) {

   if($stateParams.typeId=='' || $stateParams.typeId==undefined){
       $scope.changeName='请选择相应题型！！！';
       $scope.changesName='请先选择题目！！！';
       $scope.id=1;
   }else{
       $scope.id=$stateParams.typeId;
   }
   
     $scope.items=itemService.item($stateParams.typeId);
    // console.log($stateParams.typeId);
    $scope.bian=true;
    $scope.yuantu=function () {
        $scope.bian=true; 
    };
    $scope.dang=function () {
        $scope.bian=false;
    }
});