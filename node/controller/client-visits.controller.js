const db = require('../db');

class ClientVisitsController {
  async getClientVisits (req, res) {
    const query = `SELECT * FROM "v_clientVisits"`;
    const clientVisits = await db.query(query);

    res.json(clientVisits.rows);
  }
}

module.exports = new ClientVisitsController();
