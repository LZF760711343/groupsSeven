    /**
 * Created by Administrator on 2016/10/20.
 */
angular.module('myapp').service('itemService',function () {


    var subject=[
        {
            id:1,
            name:'HTML5'
        },
        {
            id:2,
            name:'CSS3'
        },
        {
            id:3,
            name:'Angular'
        },
        {
            id:4,
            name:'IOS'
        },
        {
            id:5,
            name:'Java'
        }
        ,
        {
            id:6,
            name:'PHP'
        }
    ];
    var topictype=[
        {
            id:1,
            name:'单选题',
            typeId:1
        },
        {
            id:2,
            name:'多选题',
            typeId:1

        },
        {
            id:3,
            name:'判断题',
            typeId:1

        },
        {
            id:4,
            name:'问答题',
            typeId:1

        },
        {
            id:5,
            name:'填空题',
            typeId:1
        },{
            id:6,
            name:'单选题',
            typeId:2
        },
        {
            id:7,
            name:'多选题',
            typeId:2

        },
        {
            id:8,
            name:'判断题',
            typeId:2

        },
        {
            id:9,
            name:'问答题',
            typeId:2

        },
        {
            id:10,
            name:'填空题',
            typeId:2

        },{
            id:11,
            name:'单选题',
            typeId:3
        },
        {
            id:12,
            name:'多选题',
            typeId:3

        },
        {
            id:13,
            name:'判断题',
            typeId:3

        },
        {
            id:14,
            name:'问答题',
            typeId:3

        },
        {
            id:15,
            name:'填空题',
            typeId:3
        },{
            id:16,
            name:'单选题',
            typeId:4
        },
        {
            id:17,
            name:'多选题',
            typeId:4

        },
        {
            id:18,
            name:'判断题',
            typeId:4

        },
        {
            id:19,
            name:'问答题',
            typeId:4

        },
        {
            id:20,
            name:'填空题',
            typeId:4
        },{
            id:21,
            name:'单选题',
            typeId:5
        },
        {
            id:22,
            name:'多选题',
            typeId:5

        },
        {
            id:23,
            name:'判断题',
            typeId:5

        },
        {
            id:24,
            name:'问答题',
            typeId:5

        },
        {
            id:25,
            name:'填空题',
            typeId:5
        },
        {
            id:26,
            name:'单选题',
            typeId:6
        },
        {
            id:27,
            name:'多选题',
            typeId:6

        },
        {
            id:28,
            name:'判断题',
            typeId:6
        },
        {
            id:29,
            name:'问答题',
            typeId:6


        },
        {
            id:30,
            name:'填空题',
            typeId:6

        }
    ];



    var item =[
        {
            id:1,
            itemname:'1:下面关于自定义指令的说法错误的是（ ）',
            stert:'A:现今市场上的前端框架只有angularJs拥有自定义指令的功能',
            stert1:'B:AngularJS是目前唯一提供Web应用可复用能力的框架',
            stert2:'C:Bootstrap插件环境提供了自定义指令功能',
            stert3:'D:自定义指令拥有易用、易编写的特点',
            anwer:'1:C',
            topGet:11
        }
        ,
        {
            id:2,
            itemname:'1:哪种方式能正确创建自定义指令（ ）',
            stert:'A:angualr.directive(“myDir”,function(){});',
            stert1:'B:angular.module(“myapp”).directive(“myDir”,function(){});',
            stert2:'C:angular.module(“myapp”).directive(“mydir”,function(){});',
            stert3:'D:angular.module(“myapp”).directive(“my-dir”);',
            anwer:'1:BC',
            topGet:12
        }
        ,

        {
            id:3,
            itemname:'1:Angular的自动数据绑定功能是亮点（ ）',
            anwer:'1:对',
            topGet:13
        }
        ,
        {
            id:4,
            itemname:'1: ng-show/ng-hide 与 ng-if 的区别？',
            anwer:'1:我们都知道ng-show/ng-hide实际上是通过 display 来进行隐藏和显示的。而ng-if实际上控制dom节点的增删除来实现的。因此如果我们是根据不同的条件来进行dom节点的加载确认的话，那么ng-if的性能好过ng-show.',
            topGet:14
        },
        {
            id:5,
            itemname:'1：我们都知道ng-show/ng-hide实际上是通过display来进行隐藏和显示的。而ng-if实际上控制dom节点的增删除来实现的。因此如果我们是根据不同的条件来进行dom节点的加载的话，那么____的性能好过____.',
            anwer:'ng-if ng-show.',
            topGet:15
        },
        {
            id:6,
            itemname:'1:以下说法不正确的是：（ ）',
            stert:'A、HTML5 标准还在制定中',
            stert1:'B、HTML5兼容以前HTML4下浏览器',
            stert2:'C、<canvas>标签替代Flash',
            stert3:'D、简化的语法',
            anwer:'1：A',
            topGet:1
        },
        {
            id:7,
            itemname:'1:下面说法不正确的是（ ）',
            stert:'A、<table><tr><td>这三个标记是最重要的表格标记',
            stert1:'B、<table><tr><td>这三个标记是最重要的框架标记',
            stert2:'C、<FRAMESET> <FRAME>这两个标记是最重要的框架标记',
            stert3:'D、<FRAMESET> <FRAME>这两个标记是最重要的表格标记',
            anwer:'1：BD',
            topGet:2
        },
        {
            id:8,
            itemname:'1: <img src="name" align="left">的意思是图像相对于周围的文本左对齐',
            anwer:'1：对',
            topGet:3
        },
        {
            id:9,
            itemname:'1:对WEB标准以及W3C的理解与认识       ',
            anwer:'标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性;',
            topGet:4
        },
        {
            id:10,
            itemname:'1:块级元素包括________',
            anwer:'1：div p h1 h2 h3 h4 form ul',
            topGet:5
        },
        {
            id:11,
            itemname:'1:下列属性中表示文档中的未访问过的超链接的颜色是哪个（）',
            stert:'A、linkColor属性',
            stert1:'B、 vlinkColor属性',
            stert2:'C、alinkColor属性',
            stert3:'D、以上都不是',
            anwer:'1：A',
            topGet:6
        },
        {
            id:12,
            itemname:'1:RGB三原色的组成是哪三种颜色（ ）',
            stert:'A、红',
            stert1:'B、黄',
            stert2:'C、蓝',
            stert3:'D、绿',
            anwer:'1：ACD',
            topGet:7
        },
        {
            id:13,
            itemname:'1:层叠样式表是HTML的辅助工具，缺点是设计者设计的网页缺少动感，网页内容的排版布局上也有很多困难（ ）',
            anwer:'1：错',
            topGet:8
        },
        {
            id:14,
            itemname:'1:CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?',
            anwer:'1：标签选择符 类选择符 id选择符 继承不如指定 Id>class>标签选择 后者优先级高',
            topGet:9
        },
        {
            id:15,
            itemname:'1:当希望使图片的背景是透明的时候，应该使用的图像格式是____',
            anwer:'1：GIF',
            topGet:10
        },
        {
            id:16,
            itemname:'1:IOS单选题（ ）',
            anwer:'IOS单选题答案1：C',
            topGet:16
        },
        {
            id:17,
            itemname:'1:IOS多选题（ ）',
            anwer:'IOS多选题答案1：BCD',
            topGet:17
        },
        {
            id:18,
            itemname:'1:IOS判断题（ ）',
            anwer:'IOS判断题答案1：对',
            topGet:18
        },
        {
            id:19,
            itemname:'1:IOS问答题',
            anwer:'IOS问答题答案1：...........IOS...........',
            topGet:19
        },
        {
            id:20,
            itemname:'1:IOS填空题',
            anwer:'IOS填空题答案1：...........IOS...........',
            topGet:20
        },
        {
            id:21,
            itemname:'1:Java单选题（ ）',
            anwer:'Java单选题答案1：D',
            topGet:21
        },
        {
            id:22,
            itemname:'1:Java多选题（ ）',
            anwer:'Java多选题答案1：BD',
            topGet:22
        },
        {
            id:23,
            itemname:'1:Java判断题（ ）',
            anwer:'Java判断题答案1：对',
            topGet:23
        },
        {
            id:24,
            itemname:'1:Java问答题',
            anwer:'Java问答题答案1：...........Java...........',
            topGet:24
        },
        {
            id:25,
            itemname:'1:Java填空题',
            anwer:'Java填空题答案1：...........Java...........',
            topGet:25
        },
        {
            id:26,
            itemname:'1:PHP单选题（ ）',
            anwer:'PHP单选题答案1：D',
            topGet:26
        },
        {
            id:27,
            itemname:'1:PHP多选题（ ）',
            anwer:'PHP多选题答案1：BD',
            topGet:27
        },
        {
            id:28,
            itemname:'1:PHP判断题（ ）',
            anwer:'PHP判断题答案1：对',
            topGet:28
        },
        {
            id:29,
            itemname:'1:PHP问答题',
            anwer:'PHP问答题答案1：...........Java...........',
            topGet:29
        },
        {
            id:30,
            itemname:'1:PHP填空题',
            anwer:'Java填空题答案1：...........Java...........',
            topGet:30
        }
    ];

    //显示所有科目
    this.subjects=function () {
        return subject;
    };
    //显示全部题目
    this.items=function () {
        return item;
    };
    //显示科目的题型
    this.topicTypes=function (id) {
        var shuzhu=[];
        angular.forEach(topictype,function (item) {
            if(item.typeId==id){
                shuzhu.push(item);

            }
        });
        return shuzhu;
    };
    //显示相应科目的题目
    this.item=function (id) {
        var shuzhu=[];
        angular.forEach(item,function (Item) {
            if(Item.topGet==id){
                shuzhu.push(Item)
            }
        });
        return  shuzhu;
    }


});

