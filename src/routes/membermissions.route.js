// src/routes/stores.route.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { memberMissionPreview } from "../controllers/membermissions.controller.js";

export const memberMissionsRouter = express.Router({mergeParams: true});

memberMissionsRouter.get('/:userId', asyncHandler(memberMissionPreview));