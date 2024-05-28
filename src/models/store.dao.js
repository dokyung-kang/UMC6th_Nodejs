import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql, getReviewInfo, confirmStore } from "./store.sql.js";

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