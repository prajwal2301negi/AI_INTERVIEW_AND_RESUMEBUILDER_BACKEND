import express from 'express';


import {isUserAuthenticated} from '../middlewares/auth.js'

import { getReport, postQuestion } from '../controllers/feedback.controllers.js';

const router = express.Router();

router.post('/postQuestion', isUserAuthenticated, postQuestion);
router.get('/getFeedback',isUserAuthenticated,getReport);


export default router;