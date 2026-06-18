export class Category {
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
}
