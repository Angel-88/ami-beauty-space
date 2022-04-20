const db = require('../db');

class RecordController {
  async createRecord(req, res) {
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
    const clients = await db.query(`SELECT client_id FROM clients WHERE phone = '${recordPhone}'`);
    console.log(clients);
    let clientId;
    if(clients.rows[0]) {
      clientId = clients.rows[0].client_id;
    } else {
      const newClient = await db.query(`INSERT INTO clients (client_name, phone, email)
                                      values ($1, $2, $3) RETURNING client_id`, [recordClient, recordPhone, email]);
      clientId =  newClient.rows[0].client_id;
    }

    const newRecord = await db.query(`INSERT INTO records (record_client, record_master, record_service, record_category,
                                                          record_schedule, record_date)
                                      values ($1, $2, $3, $4, $5, $6) RETURNING *`, [clientId, recordMaster,
      recordService, recordCategory, recordSchedule, recordDate]);

    res.json(newRecord.rows[0]);
  }

  async getRecords(req, res) {
    console.log(req.query.clientName);
    const clientName = req.query?.clientName?.toLowerCase() ?? '';
    const records = await db.query(`SELECT * FROM public.v_records WHERE LOWER("recordClient") LIKE '${clientName}%'`);

    res.json(records.rows);
  }
}

module.exports = new RecordController();
