import { getDB } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const db = getDB();
  const query = getQuery(event);

  let sql = "SELECT * FROM jadwal";
  const params: any[] = [];

  if (query.tipe) {
    sql += " WHERE tipe = ?";
    params.push(query.tipe);
  }

  sql += " ORDER BY created_at DESC";

  const [rows] = await db.execute(sql, params);
  return rows;
});
