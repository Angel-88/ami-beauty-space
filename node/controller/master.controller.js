const db = require('../db')

class MasterController {
  async createMaster(req, res) {
    const {master_name, master_phone, master_category, information} = req.body;
    const newMaster = await db.query(`INSERT INTO masters (master_name, master_phone, master_category, information)
    values ($1, $2, $3, $4) RETURNING *`, [master_name, master_phone, master_category, information])
    res.json(newMaster.rows[0]);
  }

  async getMasters(req, res) {
    const masters = await db.query('SELECT master_id "masterId", master_name "masterName", ' +
      'master_phone "masterPhone", master_category "masterCategory", information FROM public.masters');

    res.json(masters.rows);
  }
}

module.exports = new MasterController();
