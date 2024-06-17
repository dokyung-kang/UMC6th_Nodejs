// missions.provider.js
// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { previewMissionResponseDTO } from "../dtos/missions.dto.js";
import { getStoreMission } from "../models/missions.dao.js";

export const getMissions = async (storeId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getStoreMission(missionId, size, storeId));
}