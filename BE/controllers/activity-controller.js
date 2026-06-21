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
    const activity = await fetchActivityById(id);
    if (!activity) {
      console.log("No activity found");
    }
    res.status(200).send({ activity });
  } catch (err) {
    next(err);
  }
};

exports.getActivityByCategoryID = async (req, res, next) => {
  const id = req.params;
  try {
    const activities = await fetchActivityByCategoryid(id);
    if (!activties) {
      console.log("No activities found for that category");
    }
    res.status(200).send({ activities });
  } catch (err) {
    next(err);
  }
};

exports.getActivityInfoToPost = async (req, res, next) => {
  const { name, type, description, duration, distance, category_id, user_id } =
    req.body;
  try {
    const activity = await postActivity(
      name,
      type,
      description,
      duration,
      distance,
      category_id,
      user_id,
    );
    if (!activity) {
      console.log("All requirements needed for post");
    }
    res.status(201).send(activity);
  } catch (err) {
    next(err);
  }
};
