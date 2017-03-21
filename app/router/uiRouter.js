/**
 * Created by sks on 2016/9/27.
 */
/**
 * Created by Administrator on 2016/9/26 0026.
 */


angular.module('myapp').config(function ($stateProvider, $urlRouterProvider, basePathProvider) {


    $stateProvider.state('subject', {
        url:'/subject/{id}',
        templateUrl: basePathProvider.routerTemplatePath+'topictype.html',
        controller:'topicTypcCtrl'
    });
    $stateProvider.state('subject.details', {
        url:'/details/{typeId}',
        views:{
            'left': {templateUrl:basePathProvider.routerTemplatePath+'left.html',
                controller:'topicTypcinfoCtrl'
            },
            'right':{templateUrl:basePathProvider.routerTemplatePath+'right.html',
                controller:'topicTypcinfoCtrl'
            }
        }

    });
});

