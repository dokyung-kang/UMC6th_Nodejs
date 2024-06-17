// reviews.provider.js
// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { myReviewResponseDTO } from "../dtos/reviews.dto.js";
import { getMyPreviewReview } from "../models/reviews.dao.js";

export const getMyReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return myReviewResponseDTO(await getMyPreviewReview(reviewId, size, userId));
}