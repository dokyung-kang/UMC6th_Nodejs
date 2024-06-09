// src/routes/reviews.route.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { myReviewPreview } from "../controllers/reviews.controller.js";

export const reviewsRouter = express.Router({mergeParams: true});

reviewsRouter.get('/myReviews', asyncHandler(myReviewPreview));