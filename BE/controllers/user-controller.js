exports.getUsers = async (req, res, next) => {
  try {
    const users = await fetchUsers();
    if (users.length === 0) {
      console.log("No users");
    }
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const id = req.params;
  try {
    const user = await fetchUser(id);
    if (!user) {
      console.log("No user found");
    }
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
};
