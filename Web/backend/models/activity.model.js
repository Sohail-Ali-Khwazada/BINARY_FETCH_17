import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  activityName: {
    type: String,
    required: true,
  },
  time: {
    type: String, 
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  activityType: {
    type: String,
    enum: ['medication', 'appointment'],
    required: true,
  },
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;