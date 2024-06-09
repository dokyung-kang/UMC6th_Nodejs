// missions.provider.js
// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { previewMemberMissionResponseDTO } from "../dtos/membermissions.dto.js";
import { getMemberMission } from "../models/membermissions.dao.js";

export const getMemberMissions = async (userId, query) => {
    const {missionId, size = 3} = query;
    return previewMemberMissionResponseDTO(await getMemberMission(missionId, size, userId));
}