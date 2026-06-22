class Category {
  static async fetchAllCategories() {
    const result = await db.query("SELECT * FROM categories;");
    if (!result) {
      console.log("NO categories found");
    }
    return result.rows;
  }
  static async fetchCategoryById(id) {
    const result = await db.query("SELECT * FROM categories WHERE id = £1;", [
      id,
    ]);
    if (!result) {
      console.log("Category cannot be found");
    }
    return result.rows[0];
  }
  static async fetchActivitiesByCategoryID(id) {
    const result = await db.query(
      "SELECT * FROM activities WHERE category_id = $1;",
      [id],
    );
    if (!result) {
      console.log("No activities for that category ");
    }
    return result.rows;
  }
}

module.exports = { Category };
