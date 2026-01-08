import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true,
    },
    field: {
      type: String,
      trim: true,
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    grade: {
      type: String,
    },
    description: {
      type: String,
    },
    highlights: {
      type: [String],
      default: [],
    },
    icon: {
      type: String,
      default: 'GraduationCap',
    },
    color: {
      type: String,
      default: 'from-purple-500 to-pink-500',
    },
    order: {
      type: Number,
      default:  0,
    },
  },
  {
    timestamps:  true,
  }
);

// Index for ordering
educationSchema.index({ order: 1, startDate: -1 });

const Education = mongoose.model('Education', educationSchema);

export default Education;