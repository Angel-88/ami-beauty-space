const db = require('../db');

class TotalByCategoryController {
  async getTotalByCategory (req, res) {
    const startDate = req.query?.startDate || '2000-01-15';
    const endDate = req.query?.endDate || '3000-12-15';
    const query = `
      SELECT "recordCategory",
             SUM("recordPrice") AS "totalRecordPrice"
      FROM v_records
      WHERE "recordDate" BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY "recordCategory"`;
    const totalByCategory = await db.query(query);

    res.json(totalByCategory.rows);
  }
}

module.exports = new TotalByCategoryController();
