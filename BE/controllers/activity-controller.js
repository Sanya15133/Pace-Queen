exports.getActivities = async (req, res, next) => {
  try {
    const activities = fetchActivities();
    if (activities.length === 0) {
      console.log("No activities");
    }
    res.status(200).send({ activities });
  } catch (err) {
    next(err);
  }
};

exports.getActivityById = async (req, res, next) => {
  try {
    const id = req.params;
    const activity = fetchAticityById(id);
    if (!activity) {
      console.log("No activity found");
    }
    res.status(200).send({ activity });
  } catch (err) {
    next(err);
  }
};
