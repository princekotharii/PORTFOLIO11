import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    min: 0,
    max: 100,
    default: 50,
  },
});

const skillSchema = new mongoose. Schema(
  {
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      trim: true,
      enum: ['Frontend', 'Backend', 'Languages', 'Tools & Others', 'Database', 'DevOps', 'Other'],
    },
    icon: {
      type: String,
      default: 'Code',
    },
    color: {
      type: String,
      default: '#a855f7',
    },
    items: {
      type: [skillItemSchema],
      required: [true, 'At least one skill item is required'],
      validate: {
        validator: function(items) {
          return items && items.length > 0;
        },
        message: 'Skills must have at least one item',
      },
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps:  true,
  }
);

// Index for ordering
skillSchema.index({ order: 1 });

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;