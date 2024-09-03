// models/Quiz.js
const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  optionText: String,
  isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [optionSchema],
  correctAnswer: String,
});

const quizSchema = new mongoose.Schema(
  {
    titre: String,
    description: String,
    archive: { type: Boolean, default: false },
    questions: [questionSchema],
    nombreTentatives: {
      type: Number,
      default: 0,
    },
    cours: { type: mongoose.Schema.Types.ObjectId, ref: "Cours" },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
