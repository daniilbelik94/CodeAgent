// src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Новое поле
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);