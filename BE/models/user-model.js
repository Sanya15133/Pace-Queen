const bcrypt = require("bcrypt");

export class User {
  static async registerUser({ username, email, password, cycle }) {
    const hashedPassword = await bcrypt.hash(password, 11);
    const user = await db.query(
      "INSERT INTO users (username, email, password, cycle) VALUES ($1, $2, $3, $4)",
      [username, email, hashedPassword, cycle],
    );
  }
  static async loginUser({ username, password }) {
    const result = await db.query("SELECT * FROM users WHERE username = $1;", [
      username,
    ]);
    const user = result.rows[0];
    if (!user) {
      console.log("No user found");
    }
    const isPasswordMatch = bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      console.log("Passwords do not match");
    }
    return {
      id: user.id,
      username: user.username,
      password: user.password,
    };
  }
  static async fetchUsers() {
    const result = await db.query("SELECT * FROM users;");
    return result.rows;
  }
  static async fetchUserById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }
}
