// store.sql.js

export const getReviewByReviewId = 
"SELECT u.name, u.id, r.id, r.score, r.body, r.created_at FROM review r JOIN member u on r.member_id = u.id WHERE r.store_id = ? AND r.id <= ? ORDER BY r.id DESC LIMIT ?;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.name, u.id, r.id as review_id, r.score, r.body, r.created_at FROM review r JOIN member u on r.member_id = u.id WHERE r.store_id = ? ORDER BY r.id DESC LIMIT ?;"