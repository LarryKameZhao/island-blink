import { KeywordModel } from "../../models/keyword";
import { BookModel } from "../../models/books";
import { paginationBev } from "../behaviors/pagination";
const bookModel = new BookModel();
const keywordModel = new KeywordModel();
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: "loadMore"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    searching: false,
    q: "",
    loading: false,
    loadingCenter: false
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
    loadMore() {
      if (!this.data.q) {
        return;
      }
      if (this.isLocked()) {
        return;
      }
      if (this.hasMore()) {
        this.locked();
        bookModel.search(this.getCurrentStart(), this.data.q).then(res => {
          this.setMoreData(res.books);
          this.unLocked();
        });
      }
    },

    onCancel(event) {
      this.triggerEvent("cancel", {}, {});
      this.initialize();
    },
    onDelete(event) {
      this._closeResult();
      this.initialize();
    },
    onConfirm(event) {
      this._showResult();
      this._showLoadingCenter();
      const q = event.detail.value || event.detail.text;
      if (!q) {
        return;
      }
      bookModel.search(0, q).then(
        res => {
          this.setMoreData(res.books);
          this.setTotal(res.total);
          this.setData({
            q
          });
          keywordModel.addToHistory(q);
          this._hideLoadingCenter();
        },
        () => {
          this.unLocked();
        }
      );
    },
    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      });
    },
    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      });
    },
    _showResult() {
      this.setData({
        searching: true
      });
    },
    _closeResult() {
      this.setData({
        searching: false,
        q: ""
      });
    }
  }
});
