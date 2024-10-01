import Activity from '../models/activity.model.js';

export const getActivities = async (req, res) => {
  console.log('getActivities');
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createActivity = async (req, res) => {
  
  const {activityName, time,date,activityType} = req.body;
  const newActivity = new Activity({activityName, time,date,activityType});

  try {
    await newActivity.save();
    res.status(200).json(newActivity);
  } catch (error) {
    res.json({ message: error.message });
  }
}