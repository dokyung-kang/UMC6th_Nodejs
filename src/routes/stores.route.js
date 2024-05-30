// src/routes/stores.route.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { reviewPreview } from "../controllers/stores.controller.js";

export const storesRouter = express.Router({mergeParams: true});

storesRouter.get('/reviews', asyncHandler(reviewPreview));