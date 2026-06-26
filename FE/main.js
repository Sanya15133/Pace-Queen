import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const registerUser = async ({ username, email, password, cycle }) => {
  try {
    const { data } = await api.post("/register", {
      username,
      email,
      password,
      cycle,
    });
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

const loginUser = async ({ username, password }) => {
  try {
    const { data } = await api.post("/login", {
      username,
      password,
    });
    return data.username;
  } catch (err) {
    console.log(err, "err");
  }
};

const getUser = async (id) => {
  try {
    const { data } = await api.get("/users/:id", {
      params: { id },
    });
    if (!data) {
      console.log("This user does not exist");
    }
    return data;
  } catch (err) {
    console.log(err, "error");
  }
};

const getUsers = async () => {
  try {
    const { data } = await api.get("/users");
    if (data.length === 0) {
      console.log("No users found");
    }
    return data;
  } catch (err) {
    console.log(err, "error");
  }
};

const getActivities = async () => {
  try {
    const { data } = await api.get("/activities");
    if (data.length === 0) {
      console.log("No activities found");
    }
    return data;
  } catch (err) {
    console.log(err, "error");
  }
};

const getActivityById = async (id) => {
  try {
    const { data } = await api.get(`/activities/${id}`);
    if (!data) {
      console.log("Activity cannot be found");
    }
    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

const postActivity = async (
  name,
  type,
  description,
  duration,
  distance,
  category_id,
  user_id,
) => {
  try {
    const { data } = await api.post("/activities", {
      name,
      type,
      description,
      duration,
      distance,
      category_id,
      user_id,
    });
    if (!data) {
      console.log("All parameters required");
    }
    return data;
  } catch (err) {
    console.log(err, "error posting");
  }
};

const editActivity = async (id, duration, distance) => {
  try {
    const { data } = await api.patch(`/activities/${id}`, {
      duration,
      distance,
    });

    if (!data) {
      console.log("Activity cannot be updated");
      return;
    }

    return data;
  } catch (err) {
    console.error("Error updating activity:", err);
  }
};

const getCategories = async () => {
  try {
    const { data } = await api.get("/categories");
    if (data.length === 0) {
      console.log("No categories found");
    }
    return data;
  } catch (err) {
    console.log(err, "error getting categories");
  }
};

const getCategoryById = async (id) => {
  try {
    const { data } = await api.get(`/categories/${id}`);
    if (!data) {
      console.log("No category found matching this id");
    }
    return data;
  } catch (err) {
    console.log(err, "error");
  }
};

const getActivitiesByCategoryId = async (id) => {
  try {
    const { data } = await api.get(`/activities?category=${id}`);
    if (data.length === 0) {
      console.log("No activities found for that category");
    }
    return data;
  } catch (err) {
    console.log(err, "error");
  }
};
