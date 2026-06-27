import { getDB } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const db = getDB();
  const id = getRouterParam(event, "id");

  const [rows] = await db.execute("SELECT * FROM jadwal WHERE id = ?", [id]);
  const jadwal = (rows as any[])[0];

  if (!jadwal) {
    throw createError({ statusCode: 404, statusMessage: "Jadwal tidak ditemukan" });
  }

  return jadwal;
});
