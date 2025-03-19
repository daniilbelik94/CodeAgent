// src/models/UserProgress.js
import mongoose from 'mongoose';

const userProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Уникальный ID пользователя
  completedLessons: [{ type: String }], // Массив выполненных уроков (например, ['html-1-1', 'html-1-2'])
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model('UserProgress', userProgressSchema);