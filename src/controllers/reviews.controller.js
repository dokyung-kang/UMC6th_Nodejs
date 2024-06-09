// reviews.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getMyReview } from "../providers/reviews.provider.js";

export const myReviewPreview = async (req, res, next) => {
    console.log("사용자 리뷰 작성을 요청하였습니다!");
    console.log("path:", req.params); // 값이 잘 들어오나 찍어보기 위한 테스트 용
    console.log("query:", req.query); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    return res.send(response(status.SUCCESS, await getMyReview(req.params.userId, req.query)));
}