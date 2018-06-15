

Page({

  /**
   * 页面的初始数据
   */
  data: {
   _songsList :[{
      dataUrl: 'http://stream.qqmusic.tc.qq.com/137192078.mp3',
      name: '告白气球',
      mid: "003OUlho2HcRHC",
      singer: '周杰伦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg'
    }, {
      dataUrl: 'http://stream.qqmusic.tc.qq.com/138549169.mp3',
      name: '你还要我怎样',
      mid: "000E62Tc3bMiJB",
      singer: '薛之谦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg'
    }, {
      dataUrl: 'http://stream.qqmusic.tc.qq.com/137903929.mp3',
      name: '微微一笑很倾城',
      mid: "002NbtFA3fuJhD",
      singer: '杨洋',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg'
    }, {
      dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
      name: '演员',
      mid: "001Qu4I30eVFYb",
      singer: '薛之谦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg'
    }],
   items :['播放列表', '歌曲', '专辑', '演唱者'],
   currentImage:"http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg",
   currentName:"告白气球"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  showAction:function(){
    wx.showActionSheet({
      itemList: this.data.items,
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  itemClick:function(e){
    console.log(e);
    var position=e.target.id;
    console.log(position);
    var imgurl=this.data._songsList[position].coverImgUrl;
    var name = this.data._songsList[position].name;
    var dataUrl = this.data._songsList[position].dataUrl;
    console.log(this.data._songsList[position]);
    this.setData({
      currentImage: imgurl,
      currentName: name
    });
    //播放音乐
    wx.playBackgroundAudio({
      dataUrl: dataUrl,
      title: name,
      coverImgUrl: imgurl
    })
  }
})