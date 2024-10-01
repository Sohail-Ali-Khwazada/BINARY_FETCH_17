import express from "express";
import { getAllusers } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/",protectRoute,getAllusers);

export default router;