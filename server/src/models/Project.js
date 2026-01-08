import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim:  true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    longDescription: {
      type: String,
    },
    techStack: {
      type: [String],
      required: [true, 'Tech stack is required'],
    },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Other'],
      default: 'Full Stack',
    },
    githubLink: {
      type:  String,
      trim: true,
    },
    liveLink: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: '🚀',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['Completed', 'In Progress', 'Planned'],
      default: 'Completed',
    },
  },
  {
    timestamps:  true,
  }
);

// Index for faster queries
projectSchema.index({ featured: -1, order: 1, createdAt: -1 });

const Project = mongoose.model('Project', projectSchema);

export default Project;