import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStoreReview } from "../services/store.service.js";

export const storeReviews = async (req, res, next) => {
    console.log("가게 리뷰 작성을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await joinStoreReview(req.body)));
}