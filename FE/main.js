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
    const { data } = await api.get("/users", {
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
