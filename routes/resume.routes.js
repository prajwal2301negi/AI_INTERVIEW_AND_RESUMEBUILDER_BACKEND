import express from 'express';
const router = express.Router();
import  { createResume, getAllResumes } from '../controllers/resumeControllers.js';

// Create a new resume
router.post('/resumeUpload', createResume);

// Get all resumes
router.get('/resumeGet', getAllResumes);

// Get a single resume by ID
// router.get('/resumes/:id', getResumeById);

// // Update a resume by ID
// router.put('/resumes/:id', resumeController.updateResume);

// // Delete a resume by ID
// router.delete('/resumes/:id', resumeController.deleteResume);

export default router;
