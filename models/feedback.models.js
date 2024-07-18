import mongoose from "mongoose";


const feedbackSchema = new mongoose.Schema(
  {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }
);

const feedback = mongoose.model("Feedback", feedbackSchema);
export default feedback;
