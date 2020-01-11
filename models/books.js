import { HTTP } from "../util/http_p.js";

class BookModel extends HTTP {
  data = null;
  getHotList() {
    return this.request({
      url: "book/hot_list"
    });
  }
  test() {
    console.log(1);
  }
}

export { BookModel };
