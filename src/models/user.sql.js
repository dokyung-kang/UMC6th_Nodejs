export const insertUserSql = "INSERT INTO member (email, name, gender, birth, address, spec_address, phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const connectFoodCategory = "INSERT INTO interest_food (food_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail;";

export const getPreferToUserID =
"SELECT ufc.id, ufc.food_id, ufc.user_id, fcl.name FROM interest_food ufc JOIN food fcl on ufc.food_id = fcl.id WHERE ufc.user_id = ? ORDER BY ufc.food_id ASC;";