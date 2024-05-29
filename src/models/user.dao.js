import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID, insertMemberMissionSql, getMemberMissionInfo, confirmMMission, confirmMember } from "./user.sql.js";

// sign in -> insert query
export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmEmail, data.email);

        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        // console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// member mission -> insert query
export const addMemberMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm1] = await pool.query(confirmMember, data.member_id);
        const [confirm2] = await pool.query(confirmMMission, data.mission_id);

        // 사용자 존재하는지 확인
        if(!confirm1[0].isExistMember){
            conn.release();
            return -1;
        }

        // 미션 존재하는지 확인
        if(!confirm2[0].isExistMMission){
            conn.release();
            return -2;
        }

        // 멤버 미션 추가
        const result = await pool.query(insertMemberMissionSql, [Number(data.mission_id), Number(data.member_id)]);

        conn.release();
        
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getMemberMission = async (membermissionId) => {
    try {
        const conn = await pool.getConnection();
        const [membermission] = await pool.query(getMemberMissionInfo, membermissionId);

        if(membermission.length == 0){
            return -1;
        }

        conn.release();
        return membermission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}