const db = require('../db');

class TotalPriceByClientController {
  async getTotalPriceByClient (req, res) {
    const query = `SELECT * FROM "v_totalPriceByClient"`;
    const totalPriceByClient = await db.query(query);

    res.json(totalPriceByClient.rows);
  }
}

module.exports = new TotalPriceByClientController();
