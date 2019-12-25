// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer() {}
    },
    count: {
      type: Number,
      value: 100
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: "images/like.png",
    noSrc: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      console.log(event);
      let { like, count } = this.properties;
      count = like ? count - 1 : count + 1;
      this.setData({
        like: !like,
        count
      });
    }
  }
});
