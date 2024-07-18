import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resumeSchema = new Schema({


  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: String,
  github: String,


  institution: { type: String, required: true },
  location: { type: String, required: true },
  degree: { type: String, required: true },
  dates: { type: String, required: true },

  projectName: { type: String, required: true },
  projectTechnologies: { type: String, required: true },
  projectDate: { type: String, required: true },
  projectDetails: { type: String, required: true },

  experienceTitle: { type: String, required: true },
  experienceCompany: { type: String, required: true },
  experienceDate: { type: String, required: true },
  experienceDetails: { type: String, required: true },

  skillsLanguages: { type: String, required: true },
  skillsFrameworks: { type: String, required: true },
  skillsTools: { type: String, required: true },
  skillsLibraries: { type: String, required: true },

  achievementsTitle: { type: String, required: true },
  achievementsPositionOfResponsibility: { type: String, required: true },
  achievementsSportsHonour: { type: String, required: true },
  achievementsHackathon: { type: String, required: true },
  achievementsLeetcode: { type: String, required: true },
  achievementsGfg: { type: String, required: true },

});


const resume = mongoose.model('Resume', resumeSchema);
export default resume;
