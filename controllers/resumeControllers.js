import Resume from '../models/resume.js';

// Create a new resume
export const createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ message: 'Error creating resume', error });
  }
};

// Get all resumes
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resumes', error });
  }
};

// // Get a single resume by ID
// export const getResumeById = async (req, res) => {
//   try {
//     const resume = await Resume.findById(req.params.id);
//     if (!resume) {
//       return res.status(404).json({ message: 'Resume not found' });
//     }
//     res.status(200).json(resume);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching resume', error });
//   }
// };

// // Update a resume by ID
// exports.updateResume = async (req, res) => {
//   try {
//     const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!resume) {
//       return res.status(404).json({ message: 'Resume not found' });
//     }
//     res.status(200).json(resume);
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating resume', error });
//   }
// };

// // Delete a resume by ID
// exports.deleteResume = async (req, res) => {
//   try {
//     const resume = await Resume.findByIdAndDelete(req.params.id);
//     if (!resume) {
//       return res.status(404).json({ message: 'Resume not found' });
//     }
//     res.status(200).json({ message: 'Resume deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting resume', error });
//   }
// };
