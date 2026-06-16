exports.getCategories = async (req, res, next) => {
  try {
    const categories = await fetchCategories();
    if (categories.length === 0) {
      console.log("No categories");
    }
    res.status(200).send({ categories });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  const id = req.params;
  try {
    const category = await fectCategoryById(id);
    if (!category) {
      console.log("No category found");
    }
    res.status(200).send({ categories });
  } catch (err) {
    next(err);
  }
};
