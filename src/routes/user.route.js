import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin, memberMissions } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));

userRouter.post('/add/mission', asyncHandler(memberMissions));