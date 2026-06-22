const express = require("express");
const {
  getActivities,
  getActivityById,
  getActivityByCategoryID,
} = require("./controllers/activity-controller");
const {
  registerUser,
  logInUser,
  getUsers,
  getUserById,
} = require("./controllers/user-controller");
const {
  getCategories,
  getCategoryById,
} = require("./controllers/category-controller");
const router = express.Router();

router.get("/activites", getActivities);
router.get("/activities/:id", getActivityById);
router.get("/activities/categories/:id", getActivitiesByCategoryID);
router.get("/register", registerUser);
router.get("/login", logInUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.get("/categories/activities/:id", getActivityByCategoryID);

module.exports = router