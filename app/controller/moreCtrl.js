

angular.module('myapp').controller('moreCtrl',function ($scope,subjectTopic) {
    
    $scope.subjectTypes=subjectTopic.getSubjectTypes();
    

});