import { HTTP } from "../util/http_p.js";

class BookModel extends HTTP {
  data = null;
  getHotList() {
    return this.request({
      url: "book/hot_list"
    });
  }
  getMyBookCount() {
    return this.request({
      url: "/book/favor/count"
    });
  }
}

export { BookModel };
