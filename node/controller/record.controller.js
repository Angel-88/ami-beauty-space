const db = require('../db');

class RecordController {
  async createRecord (req, res) {
    const {
      recordClient,
      recordPhone,
      email,
      recordMaster,
      recordService,
      recordCategory,
      recordSchedule,
      recordDate
    } = req.body;
    const clients = await db.query(`SELECT client_id
                                    FROM clients
                                    WHERE phone = '${recordPhone}'`);
    let clientId;
    if (clients.rows[0]) {
      clientId = clients.rows[0].client_id;
    } else {
      const newClient = await db.query(`
        INSERT INTO clients (client_name, phone, email)
        values ($1, $2, $3) RETURNING client_id`, [recordClient, recordPhone, email]);
      clientId = newClient.rows[0].client_id;
    }

    const newRecord = await db.query(`
      INSERT INTO records (record_client, record_master, record_service,
                           record_category,
                           record_schedule, record_date)
      values ($1, $2, $3, $4, $5, $6) RETURNING *`, [clientId, recordMaster,
      recordService, recordCategory, recordSchedule, recordDate]);

    res.json(newRecord.rows[0]);
  }

  async getRecords (req, res) {
    const clientName = req.query?.clientName?.toLowerCase() ?? '';
    const masterName = req.query?.masterName?.toLowerCase() ?? '';
    const startDate = req.query?.startDate || '2000-01-15';
    const endDate = req.query?.endDate || '3000-12-15';
    const query = `
      SELECT *
      FROM public.v_records
      WHERE LOWER("recordClient")
        LIKE '${clientName}%'
        AND LOWER("recordMaster")
        LIKE '${masterName}%'
        AND "recordDate" BETWEEN '${startDate}' AND '${endDate}'`;
    const records = await db.query(query);

    res.json(records.rows);
  }
}

module.exports = new RecordController();
