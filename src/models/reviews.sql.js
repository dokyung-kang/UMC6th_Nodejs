// reviews.sql.js

export const getMyReviewByReviewId = 
"SELECT u.name, u.id, r.id, r.score, r.body, r.created_at FROM review r JOIN member u on r.member_id = u.id WHERE r.member_id = ? AND r.id <= ? ORDER BY r.id DESC LIMIT ?;"

export const getMyReviewByReviewIdAtFirst = 
"SELECT u.name, u.id, r.id as review_id, r.score, r.body, r.created_at FROM review r JOIN member u on r.member_id = u.id WHERE r.member_id = ? ORDER BY r.id DESC LIMIT ?;"