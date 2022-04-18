const db = require('../db')

class RecordController {
  async createRecord(req, res) {
    const {recordClient, recordMaster, recordService, recordCategory, recordSchedule, recordDate} = req.body;
    const newRecord = await db.query(`INSERT INTO record (record_client, record_master, record_service, record_category,
      record_schedule, record_date) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [recordClient, recordMaster,
      recordService, recordCategory, recordSchedule, recordDate])
    res.json(newRecord.rows[0]);
  }

  async getRecords(req, res) {
    const records = await db.query('SELECT record_client "recordClient", record_master "recordMaster", ' +
      'record_service "recordService", record_category "recordCategory", record_schedule "recordSchedule", ' +
      'record_date "recordDate" FROM public.records');

    res.json(records.rows);
  }
}

module.exports = new RecordController();
