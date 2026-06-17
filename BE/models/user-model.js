class User {
  static async registerUser() {
    const user = await db.query("INSERT INTO users");
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
