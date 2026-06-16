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
