const express = require("express");
const {
  getActivities,
  getActivityById,
  getActivityByCategoryID,
} = require("./controllers/activity-controller");
const router = express.router();

router.get("/activites", getActivities);
router.get("/activities/:id", getActivityById);
router.get("/activities/categories/:id", getActivitiesByCategoryID);
