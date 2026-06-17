export class Activity {
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
}
