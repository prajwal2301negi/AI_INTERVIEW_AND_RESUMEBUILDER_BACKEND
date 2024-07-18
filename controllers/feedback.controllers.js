import Feedback from "../models/feedback.models.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import ErrorHandler from "../utils/errorMiddleware.js";

export const postQuestion = asyncErrorHandler(async (req, res, next) => {

    const user = req.user;
    const userId = user._id;
    const { question, answer} = req.body;

    if (!question || !answer) {
        return next(new ErrorHandler("Please fill all the required fields", 400));
    }
    const feedback = await Feedback.create({
        student: userId, question, answer
    });
    res.status(200).json({
        success: true,
        feedback
    });

});



export const getReport = asyncErrorHandler(async (req, res, next) => {

    const user = req.user;
    const userId = user._id;

    const personalFeedback = await Feedback.find({ student: userId });

    const feedback = await Feedback.find({ student: userId }).sort({ createdAt: -1 }).populate('user', 'name email')

    res.status(200).json({
        success: true,
        feedback,
        personalFeedback,
    });
})