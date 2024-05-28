// store response DTO
export const storeReviewResponseDTO = (review) => {

    const storeReview = [];

    for (let i = 0; i < review.length; i++) {
        storeReview.push(review[i]);
    }

    return {"storeReviews": storeReview};
}