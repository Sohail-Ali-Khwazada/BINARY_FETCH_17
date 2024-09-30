import express from 'express';
import {getActivities,createActivity} from '../controllers/activity.controller.js';
const router= express.Router();

router.get('/get-activities',getActivities);
router.post('/create-activity',createActivity);

export default router;