import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

import { storeReviewResponseDTO, storeMissionResponseDTO, storeRegionResponseDTO } from "../dtos/store.dto.js"
import { addStoreReview, getStoreReview, addStoreMission, getStoreMission, addStoreRegion, getStoreRegion } from "../models/store.dao.js";

export const joinStoreReview = async (body) => {

    const joinStoreReviewData = await addStoreReview({
        'member_id': body.member_id,
        'store_id': body.store_id,
        'score': body.score,
        'body': body.body
    });

    if(joinStoreReviewData == -1){
        throw new BaseError(status.STORE_NOT_EXIST);
    }else{
        return storeReviewResponseDTO(await getStoreReview(joinStoreReviewData));
    }
}

export const joinStoreMission = async (body) => {

    const joinStoreMissionData = await addStoreMission({
        'store_id': body.store_id,
        'reward': body.reward,
        'deadline': body.deadline,
        'mission_spec': body.mission_spec
    });

    if(joinStoreMissionData == -1){
        throw new BaseError(status.STORE_NOT_EXIST);
    }else if(joinStoreMissionData == -2){
        throw new BaseError(status.STORE_MISSION_ALREADY_EXIST);
    }
    else{
        return storeMissionResponseDTO(await getStoreMission(joinStoreMissionData));
    }
}

export const joinStoreRegion = async (body) => {

    const joinStoreRegionData = await addStoreRegion({
        'region_id': body.region_id,
        'id': body.id
    });

    if(joinStoreRegionData == -1){
        throw new BaseError(status.STORE_NOT_EXIST);
    }else if(joinStoreRegionData == -2){
        throw new BaseError(status.REGION_NOT_EXIST);
    }
    else{
        return storeRegionResponseDTO(await getStoreRegion(joinStoreRegionData));
    }
}