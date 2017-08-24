# moviespirite
用 JS 实现 帧动画
适用场景


帧数较多
需要灵活控制播放暂停等
帧动画工具 参考Glue - 生成精灵图片工具

原理

合成精灵图片时会同时生成一个css文件，这个文件里给精灵图片中每个小图都有一个相应的类，用来标志其位置，那么就可以通过切换这些类来达到切换背景图片位置的帧动画效果。

代码

html
 
   <div class="sprite"></div>

css  (宽和高要和单个图片的宽高一样，之后可以通过scale缩放成想要的大小)

   .sprite{  width: 375px;  height: 425px;}

js

   movieSprite = new MovieSprites($('.sprite')[0], {//选取目标dom    
       classAni: 'sprite-move-left00',//每个小图的css类名去除最后的序号    
       classOrigin: 'sprite',//目标dom如果需要额外的类，写在这里，eg：'sprite move'    
       frameLastTime: 50,//每一帧的持续时间    
       step: 1,//切换类时的等差，（1，2，3，4）    
       totalFrame: 72,//总的帧数    
       loop: false,//是否循环播放    
       finishCallback: function() {},//不循环时的结束回调    
       stopCallback: function(){},//stop时的回调  
   });  
   movieSprite.play();//播放  
   movieSprite.stop();//暂停  
   movieSprite.revert();//反向播放

注意事项


精灵图片尺寸要小于2500 * 2500
如果需要多个精灵图片接合成一个，序号要对上
如果需要多个精灵图片接合成一个，切换图片时因为图片尺寸的问题渲染需要一定时间，所以最好在loading中让其opacity为0提前播放一遍动画。
