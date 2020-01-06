import { HTTP } from "../util/http.js";
class ClassicModel extends HTTP {
  getLatest(sCallBack) {
    this.request({
      url: "classic/latest",
      success: res => {
        sCallBack(res);
      }
    });
  }
  getPrevious(sCallBack, index) {
    this.request({
      url: `classic/${index}/previous`,
      success: res => {
        sCallBack(res);
      }
    });
  }
}
export { ClassicModel };
