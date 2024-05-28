export const insertReviewSql = "INSERT INTO review (member_id, store_id, score, body) VALUES (?, ?, ?, ?);";

export const getReviewInfo = "SELECT * FROM review WHERE id = ?";

export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) as isExistStore;";
