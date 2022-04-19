const db = require('../db');

class ScheduleController {
  async createSchedule (req, res) {
    const { schedule_name } = req.body;
    const newSchedule = await db.query(`INSERT INTO schedules (schedule_name)
                                        values ($1) RETURNING *`, [schedule_name]);

    res.json(newSchedule.rows[0]);
  }

  async getSchedules (req, res) {
    const schedules = await db.query('SELECT schedule_id "scheduleId", schedule_name "scheduleName" FROM public.schedule');

    res.json(schedules.rows);
  }
}

module.exports = new ScheduleController();
