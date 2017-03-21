/**
 * Created by Administrator on 2016/10/25.
 */

angular.module('myapp').service('subjectTopic',function (basePath) {
    var subjectTypes = [
        {
            id: 1,
            name: 'HTML5',
            pic:basePath.imgPath+'HTML5_more.png',
            url:basePath.path+'three.html#/subject/1/details/1'
        },
        {
            id: 2,
            name: 'CSS3',
            pic:basePath.imgPath+'CSS3.png',
            url:basePath.path+'three.html#/subject/2/details/6'
        },
        {
            id: 3,
            name: 'Angular',
            pic:basePath.imgPath+'ANGULAR_more.png',
            url:basePath.path+'three.html#/subject/3/details/11'
        },
        {
            id: 4,
            name: 'IOS',
            pic:basePath.imgPath+'IOS.png',
            url:basePath.path+'three.html#/subject/4/details/16'
        },
        {
            id: 5,
            name: 'JAVA',
            pic:basePath.imgPath+'JAVA_more.png',
            url:basePath.path+'three.html#/subject/5/details/21'
        },
        {
            id: 6,
            name: 'PHP',
            pic:basePath.imgPath+'PHP.png',
            url:basePath.path+'three.html#/subject/6/details/26'
        }
    ];
    // //根据id获取科目类型
    // this.getSubjectTypesById = function (id) {
    //     var temp = {};
    //     angular.forEach(subjectTypes, function (item) {
    //         if (item.id == id) {
    //             temp=item;
    //         }
    //     });
    //     return temp;
    // };
    //返回科目类型
    this.getSubjectTypes= function () {
        return subjectTypes;
    };

});