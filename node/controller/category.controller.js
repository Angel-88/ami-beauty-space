const db = require('../db');

class CategoryController {
  async createCategory (req, res) {
    const { category_name } = req.body;
    const newCategory = await db.query(`INSERT INTO categories (category_name)
                                        values ($1) RETURNING *`, [category_name]);

    res.json(newCategory.rows[0]);
  }

  async getCategories (req, res) {
    const categories = await db.query('SELECT category_id "categoryId", category_name "categoryName" FROM public.categories');

    res.json(categories.rows);
  }
}

module.exports = new CategoryController();
