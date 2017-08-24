$(function() {
  var frameStep = 1;
  var frameSpeed = 20;

  movieLeft = new MovieSprites($('.left')[0], {//选取目标dom
    classAni: 'sprite-move-left00',//每个小图的css类名去除最后的序号
    classOrigin: 'left',//目标dom如果需要额外的类，写在这里，eg：'sprite move'
    frameLastTime: frameSpeed,//每一帧的持续时间
    step: frameStep,//切换类时的等差，（1，2，3，4）
    totalFrame: 72,//总的帧数
    loop: false,//是否循环播放
    finishCallback: function() {//不循环时的结束回调
      $('.left').appendTo('.left-box');
      movieLeft.loop = true;
      $('.play').text('play');
      movieLeft.frameLastTime = 50;
      movieLeft.stopCallback = function(){//stop时的回调
        console.log('stop');
      };
      movieLeft.revertCallback = function(){
        console.log('revert');
      };
    }
  });
  movieLeft.play();
  $('.stop').click(function(){
     movieLeft.stop();//暂停
   });
  $('.revert').click(function(){
      movieLeft.revert();//反向播放
  });
  $('.play').click(function(){
      movieLeft.play();//播放
  });
  
});
