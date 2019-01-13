var postsData = require("../../data/posts-data.js")
Page({
  data: {
    date:"NOV 25 2016",
    title:"正是虾肥蟹壮时"
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },

  onSwiperTap:function(event){
    // target 和 crrentTarget
    // target 指的是当前点击的组件
    // currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },

  onLoad: function (options) {
    this.setData({
      posts_key: postsData.postList
      });
  },
})