// store.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getMissions } from "../providers/missions.provider.js";

export const missionPreview = async (req, res, next) => {
    console.log("가게 미션을 요청하였습니다!");
    console.log("path:", req.params); // 값이 잘 들어오나 찍어보기 위한 테스트 용
    console.log("query:", req.query); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    return res.send(response(status.SUCCESS, await getMissions(req.params.storeId, req.query)));
}