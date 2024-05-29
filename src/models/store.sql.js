export const insertReviewSql = "INSERT INTO review (member_id, store_id, score, body) VALUES (?, ?, ?, ?);";

export const insertMissionSql = "INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);";

export const updateStoreSql = "UPDATE store SET region_id = ? WHERE id = ?;";

export const getReviewInfo = "SELECT * FROM review WHERE id = ?";

export const getMissionInfo = "SELECT * FROM mission WHERE id = ?";

export const getStoreInfo = "SELECT store.*, region.name as region_name FROM store JOIN region ON store.region_id = region.id WHERE store.id = ?;";

export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) as isExistStore;";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM mission WHERE store_id = ?) as isExistStoreMission;";

export const confirmRegion = "SELECT EXISTS(SELECT 1 FROM region WHERE id = ?) as isExistStoreRegion;";
