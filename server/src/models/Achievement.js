import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Achievement title is required'],
      trim:  true,
    },
    description: {
      type: String,
      required: [true, 'Achievement description is required'],
    },
    date: {
      type: String,
      required: [true, 'Achievement date is required'],
    },
    icon: {
      type: String,
      default: 'Trophy',
    },
    color:  {
      type: String,
      default: '#f59e0b',
    },
    badge: {
      type: String,
      default: '🏆',
    },
    category: {
      type: String,
      enum: ['Award', 'Certification', 'Competition', 'Publication', 'Other'],
      default: 'Award',
    },
    organization: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
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
achievementSchema. index({ order: 1, date: -1 });

const Achievement = mongoose.model('Achievement', achievementSchema);

export default Achievement;