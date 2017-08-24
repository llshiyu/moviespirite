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



                           Glue 从安装到使用
      http://glue.readthedocs.org/en/latest/installation.html#windows  


Install Python, if not yet available. Python 2.7.2 Windows installer.http://www.python.org/ftp/python/2.7.2/python-2.7.2.msi
Install PIL(Python Imaging Library ) , check this website for a matching version http://effbot.org/downloads/PIL-1.1.7.win32-py2.7.exe   
Install Python’s easy_install  easy_install installer for Python 2.7 http://pypi.python.org/packages/2.7/s/setuptools/setuptools-0.6c11.win32-py2.7.exe
Add Python’s Scripts dir to your Path. Add ;C:\Python27\Scripts to the end of the line.
Start the cmd and type  : $  easy_install glue
5 说明
在cmd 中定位到 3 中下载的exe 所在文件夹，输入 easy_install glue


Quickstart
http://glue.readthedocs.org/en/latest/quickstart.html

测试是否好使
$ glue --help
If glue was correctly installed... Let’s create your first sprite!
Your first sprite
Create a new folder (icons in this example), and add as many images as you want. Then you can simply run the following command:
说明：
icons 文件夹（名字可自定义）内放你要合成的图片，
sprites 文件夹（名字可自定义）内放你生产后的图片
cmd 定位到 icons 文件夹的父文件夹，在命令行输入$ 后面的部分
$ glue icons sprites
Glue will create a new folder named sprites with the following structure:
sprites
    ├── icons.css 
    └── icons.png  
备注：可以设置合成图片的margin、padding值。在图片文件夹里放一个sprite.conf文件，里面可以设置这些值
[sprite]
margin=2
padding=2

