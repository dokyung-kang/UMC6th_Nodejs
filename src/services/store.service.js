import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

import { storeReviewResponseDTO } from "../dtos/store.dto.js"
import { addStoreReview, getStoreReview } from "../models/store.dao.js";

export const joinStoreReview = async (body) => {

    const joinStoreReviewData = await addStoreReview({
        'member_id': body.member_id,
        'store_id': body.store_id,
        'score': body.score,
        'body': body.body
    });

    if(joinStoreReviewData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return storeReviewResponseDTO(await getStoreReview(joinStoreReviewData));
    }
}