exports.getActivities = async (req, res, next) => {
  try {
    const activities = await fetchActivities();
    if (activities.length === 0) {
      console.log("No activities");
    }
    res.status(200).send({ activities });
  } catch (err) {
    next(err);
  }
};

exports.getActivityById = async (req, res, next) => {
  const id = req.params;
  try {
    const activity = await fetchAtivityById(id);
    if (!activity) {
      console.log("No activity found");
    }
    res.status(200).send({ activity });
  } catch (err) {
    next(err);
  }
};
