import { HTTP } from "../util/http_p.js";

class BookModel extends HTTP {
  data = null;
  getHotList() {
    return this.request({
      url: "book/hot_list"
    });
  }
  search(start, q) {
    return this.request({
      url: `book/search?summary=1`,
      data: {
        q,
        start
      }
    });
  }
  getMyBookCount() {
    return this.request({
      url: "/book/favor/count"
    });
  }
  getMyFavor(success) {
    const params = {
      url: "classic/favor",
      success: success
    };
    this.request(params);
  }
  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    });
  }
  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    });
  }
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    });
  }
  postComment(bid, comment) {
    return this.request({
      url: "book/add/short_comment",
      method: "POST",
      data: {
        book_id: bid,
        content: comment
      }
    });
  }
}

export { BookModel };
