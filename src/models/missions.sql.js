// missions.sql.js

export const getMissionByMissionId = 
"SELECT m.store_id, m.id, m.reward, m.deadline, m.mission_spec FROM mission m JOIN store s on m.store_id = s.id WHERE m.store_id = ? AND m.id <= ? ORDER BY m.id DESC LIMIT ?;"

export const getMissionByMissionIdAtFirst = 
"SELECT m.store_id, m.id, m.reward, m.deadline, m.mission_spec FROM mission m JOIN store s on m.store_id = s.id WHERE m.store_id = ? ORDER BY m.id DESC LIMIT ?;"