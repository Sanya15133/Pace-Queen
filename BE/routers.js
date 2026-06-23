const express = require("express");
const {
  getActivities,
  getActivityById,
  getActivityByCategoryID,
  getActivityInfoToPost,
  patchActivity,
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

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/activites", getActivities);
router.post("/activites", getActivityInfoToPost);
router.get("/activities/:id", getActivityById);
router.patch("/activities/:id", patchActivity);
router.post("/register", registerUser);
router.post("/login", logInUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.get("/categories/activities/:id", getActivityByCategoryID);

module.exports = router;
