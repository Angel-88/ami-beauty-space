const db = require('../db');

class ClientController {
  async createClient (req, res) {
    const { client_name, phone, email } = req.body;
    const newClient = await db.query(`INSERT INTO clients (client_name, phone, email)
                                      values ($1, $2, $3) RETURNING *`, [client_name, phone, email]);

    res.json(newClient.rows[0]);
  }

  async getClients (req, res) {
    const clients = await db.query('SELECT client_id "clientId", client_name "clientName", phone, email FROM public.clients');

    res.json(clients.rows);
  }
}

module.exports = new ClientController();
