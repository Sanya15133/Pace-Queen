const bcrypt = require("bcrypt");

export class User {
  static async registerUser({ userame, email, password, cycle }) {
    const hashedPassword = await bcrypt.hash(password, 11);
    const user = await db.query(
      "INSERT INTO users (username, email, password, cycle) VALUES ($1, $2, $3, $4)",
      [userame, email, hashedPassword, cycle],
    );
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
