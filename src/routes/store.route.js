import express from "express";
import asyncHandler from 'express-async-handler';

import { storeReviews, storeMissions } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/review', asyncHandler(storeReviews));

storeRouter.post('/mission', asyncHandler(storeMissions));