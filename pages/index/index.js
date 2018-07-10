//index.js
//获取应用实例

let timer;
let numAI = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnstate: false,
    imageuserscr: '/pages/image/wh.jpg',
    imageAIsrc: '',
    winnum: '0',
    gameresult: '',

    srcs: [
      '/pages/image/bu.jpg',
      '/pages/image/jiandao.jpg',
      '/pages/image/shitou.jpg'
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let oldWinNum = wx.getStorageSync('winnum')
    if (oldWinNum != null && oldWinNum != '') {
      this.setData({
        winnum: oldWinNum
      })
    }
    this.timerGo();

  },



  changeforchoose(e) {
    if (this.data.btnstate) {
      return;
    }
    // console.log(e)
    this.setData({
      imageuserscr: this.data.srcs[e.currentTarget.id]
    })
    clearInterval(timer);
    let user = this.data.imageuserscr;
    let ai = this.data.imageAIsrc
    let num = this.data.winnum;
    let str = '你输了';

    let shitou = '/pages/image/shitou.jpg';
    let jiandao = '/pages/image/jiandao.jpg';
    let bu = '/pages/image/bu.jpg';


    if (user == bu && ai == shitou) {
      num++;
      str = '你赢了';
      wx.setStorageSync('winnum', num)

    }

    if (user == shitou && ai == jiandao) {
      num++;
      str = '你赢了';
      wx.setStorageSync('winnum', num)
    }


    if (user == jiandao && ai == bu) {
      num++;
      str = '你赢了';
      wx.setStorageSync('winnum', num)
    }


    if (user == ai) {
      str = "平局";

    }
    console.log(user)
    console.log(bu)
    console.log(str)

    this.setData({
      winnum: num,
      gameresult: str,
      btnstate: true
    })
  },


  timerGo() {
    timer = setInterval(this.move, 200);
  },

  move() {
    // if (numAI >= 3) {
    //   numAI = 0
    // }
    numAI=parseInt(Math.floor(Math.random()*3))
    this.setData({
      imageAIsrc: this.data.srcs[numAI]
    })
    numAI++;

  },

  again() {
    // if (this.data.btnstate == false) {
    //   return;
    // }

    this.timerGo();
    this.setData({
      btnstate: false,
      gameresult: '',
      imageuserscr: '/pages/image/wh.jpg'
      

    })
  }


})