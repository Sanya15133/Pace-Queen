class Activity {
  static async fetchActivities() {
    const result = await db.query("SELECT * FROM activities;");
    if (!result) {
      console.log("No activities found");
    }
    return result.rows;
  }
  static async fetchActivityById(id) {
    const result = await db.query("SELECT * FROM activities WHERE id = $1;", [
      id,
    ]);
    if (!result) {
      console.log("No activity found");
    }
    return result[0].rows;
  }
  static async postActivity({
    name,
    type,
    description,
    duration,
    distance,
    category_id,
    user_id,
  }) {
    const result = await db.query(
      "INSERT NTO activities (name, type, description, duration, distance, category_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7 );",
      [name, type, description, duration, distance, category_id, user_id],
    );
  }
  static async editActivity(id, { duration, distance }) {
    const result = await db.query(
      "UPDATE activities SET duration = ?, distance = ? WHERE id = ?",
      [duration, distance, id],
    );
    return this.fetchActivityById(id);
  }
}

module.exports = { Activity };
