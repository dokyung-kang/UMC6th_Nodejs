import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql, getReviewInfo, confirmStore, insertMissionSql, getMissionInfo, confirmMission, updateStoreSql, getStoreInfo, confirmRegion } from "./store.sql.js";

// store review -> insert query
export const addStoreReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        // 가게 존재하는지 확인
        const [confirm] = await pool.query(confirmStore, data.store_id);

        if(!confirm[0].isExistStore){
            conn.release();
            return -1;
        }

        // 리뷰 작성
        const result = await pool.query(insertReviewSql, [data.member_id, data.store_id, data.score, data.body]);

        conn.release();
        
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getStoreReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [storeReview] = await pool.query(getReviewInfo, reviewId);

        if(storeReview.length == 0){
            return -1;
        }

        conn.release();
        return storeReview;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// store mission -> insert query
export const addStoreMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm1] = await pool.query(confirmStore, data.store_id);
        const [confirm2] = await pool.query(confirmMission, data.store_id);

        // 가게 존재하는지 확인
        if(!confirm1[0].isExistStore){
            conn.release();
            return -1;
        }

        // 가게 미션 이미 존재하는지 확인
        if(confirm2[0].isExistStoreMission){
            conn.release();
            return -2;
        }

        // 미션 작성
        const result = await pool.query(insertMissionSql, [data.store_id, data.reward, data.deadline, data.mission_spec]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getStoreMission = async (missionId) => {
    try {
        const conn = await pool.getConnection();
        const [storeMission] = await pool.query(getMissionInfo, missionId);

        if(storeMission.length == 0){
            return -1;
        }

        conn.release();
        return storeMission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// store region -> update query
export const addStoreRegion = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm1] = await pool.query(confirmStore, data.id);
        const [confirm2] = await pool.query(confirmRegion, data.region_id);

        // 가게 존재하는지 확인
        if(!confirm1[0].isExistStore){
            conn.release();
            return -1;
        }

        // 지역이 존재하는지 확인
        if(!confirm2[0].isExistStoreRegion){
            conn.release();
            return -2;
        }

        // 지역 추가
        const result = await pool.query(updateStoreSql, [Number(data.region_id), Number(data.id)]);

        conn.release();
        
        return result[0].affectedRows;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getStoreRegion = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [storeRegion] = await pool.query(getStoreInfo, storeId);

        if(storeRegion.length == 0){
            return -1;
        }

        conn.release();
        return storeRegion;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}