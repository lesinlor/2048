//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {}
    number:[
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ],
    newNumberPool:[2,4],
  },
  //事件处理函数
  // 上下左右四个方向时间
  up: function() {
    console.log(123)
  },
  left: function(){
    console.log('left')
  },
  down: function(){
    console.log('down')
  },
  right: function(){
    console.log('right')
  },
  // 生成0-number的随机整数
  ron: function(number){
    return Math.floor(Math.random()*(number+1));
  },
  onLoad: function () {
    this.data.number[0][0] = 2;
    console.log(this.data.number[0][0])
    // this.data.number[ron(3)][ron(3)]=this.data.newNumberPool[ron(1)];
    // this.data.number[ron(3)][ron(3)]=this.data.newNumberPool[ron(1)];

  }
})
function ron(number){
    return Math.floor(Math.random()*(number+1));
  }