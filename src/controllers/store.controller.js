import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStoreReview, joinStoreMission, joinStoreRegion } from "../services/store.service.js";

export const storeReviews = async (req, res, next) => {
    console.log("가게 리뷰 작성을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await joinStoreReview(req.body)));
}

export const storeMissions = async (req, res, next) => {
    console.log("가게 미션 작성을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await joinStoreMission(req.body)));
}

export const storeRegion = async (req, res, next) => {
    console.log("지역에 가게 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await joinStoreRegion(req.body)));
}