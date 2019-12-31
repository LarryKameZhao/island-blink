import { HTTP } from "../util/http.js";

class LikeModel extends HTTP {
  like(behavior, artId, category) {
    let url = behavior === "like" ? "like" : "like/cancel";
    console.log("---in like---");
    console.log(artId, category);
    this.request({
      url,
      method: "POST",
      data: {
        art_id: artId,
        type: category
      }
    });
  }
}
export { LikeModel };
