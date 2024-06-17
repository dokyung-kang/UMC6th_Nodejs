// src/routes/stores.route.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { missionPreview } from "../controllers/missions.controller.js";

export const missionsRouter = express.Router({mergeParams: true});

missionsRouter.get('/:storeId', asyncHandler(missionPreview));