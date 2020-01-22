import { KeywordModel } from "../../models/keyword";
import { BookModel } from "../../models/books";
const bookModel = new BookModel();
const keywordModel = new KeywordModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching: false
  },
  attached() {
    this.setData({
      historyWords: keywordModel.getHistory()
    });
    keywordModel.getHot().then(res => {
      this.setData({
        hotWords: res.hot
      });
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.triggerEvent("cancel", {}, {});
    },
    onConfirm(event) {
      this.setData({
        searching: true
      });
      const q = event.detail.value;
      bookModel.search(0, q).then(res => {
        this.setData({
          dataArray: res.books
        });
        keywordModel.addToHistory(q);
      });
    }
  }
});
