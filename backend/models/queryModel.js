const db = require("../config/db");

class Query {
  static async create({ request, response }) {
    const [result] = await db.execute(
      "INSERT INTO queries (input_text, interpreted_date) VALUES (?, ?)",
      [request, response]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await db.execute(
      "SELECT * FROM queries ORDER BY created_at DESC"
    );
    return rows;
  }
}

module.exports = Query;
