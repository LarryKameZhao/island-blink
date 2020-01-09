// components/classic/eposide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal, changedPath) {
        const val = newVal < 10 ? "0" + newVal : newVal;
        this.setData({
          _index: val
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: "",
    _index: 0
  },
  attached() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    this.setData({
      year,
      month
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {}
});
