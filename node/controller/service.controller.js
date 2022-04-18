const db = require('../db')

class ServiceController {
  async createService(req, res) {
    const {service_name, service_category, price, description} = req.body;
    const newService = await db.query(`INSERT INTO services (service_name, service_category, price, description)
    values ($1, $2, $3, $4) RETURNING *`, [service_name, service_category, price, description])
    res.json(newService.rows[0]);
  }

  async getServices(req, res) {
    const services = await db.query('SELECT service_id "serviceId", service_name "serviceName", ' +
      'service_category "serviceCategory", price, description FROM public.services');

    res.json(services.rows);
  }
}

module.exports = new ServiceController();
