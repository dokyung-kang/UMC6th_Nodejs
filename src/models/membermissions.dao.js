// store.dao.js
import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getMemberMissionByMemberMissionId, getMemberMissionByMemberMissionIdAtFirst } from "./membermissions.sql.js";

export const getMemberMission = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getMemberMissionByMemberMissionIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return missions;
    
        }else{
            const [missions] = await pool.query(getMemberMissionByMemberMissionId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}