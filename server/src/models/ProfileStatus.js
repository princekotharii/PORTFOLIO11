import mongoose from 'mongoose';

const profileStatusSchema = new mongoose.Schema(
  {
    hireable: {
      type: Boolean,
      default: true,
    },
    availableForWork: {
      type: Boolean,
      default: true,
    },
    currentStatus: {
      type: String,
      enum: ['Available', 'Busy', 'On Break', 'Open to Opportunities'],
      default: 'Available',
    },
    statusMessage: {
      type: String,
      maxlength: 200,
    },
    // Singleton pattern - only one document should exist
    singleton: {
      type: Boolean,
      default: true,
      unique: true,
    },
  },
  {
    timestamps:  true,
  }
);

// Ensure only one status document exists - FIXED VERSION
profileStatusSchema.pre('save', function () {
  this.singleton = true;
});

const ProfileStatus = mongoose.model('ProfileStatus', profileStatusSchema);

export default ProfileStatus;