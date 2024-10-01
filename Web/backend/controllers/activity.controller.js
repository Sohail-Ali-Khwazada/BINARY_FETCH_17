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
  const activity = {
    activityName: "Afternoon Medication",
    time: "14:00",
    date: "2024-09-30T14:00:00.000Z",
    activityType: "medication",
  };
  // const activity = req.body;
  const newActivity = new Activity(activity);

  try {
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}