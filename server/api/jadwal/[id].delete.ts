import { getDB } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const db = getDB();
  const id = getRouterParam(event, "id");

  const [check] = await db.execute("SELECT id FROM jadwal WHERE id = ?", [id]);
  if ((check as any[]).length === 0) {
    throw createError({ statusCode: 404, statusMessage: "Jadwal tidak ditemukan" });
  }

  await db.execute("DELETE FROM jadwal WHERE id = ?", [id]);
  return { success: true };
});
