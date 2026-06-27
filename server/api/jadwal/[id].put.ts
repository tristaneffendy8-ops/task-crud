import { getDB } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const db = getDB();
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  const [check] = await db.execute("SELECT id FROM jadwal WHERE id = ?", [id]);
  if ((check as any[]).length === 0) {
    throw createError({ statusCode: 404, statusMessage: "Jadwal tidak ditemukan" });
  }

  const { judul, deskripsi, tipe, hari, waktu, durasi, kategori, status, warna } = body;

  await db.execute(
    `UPDATE jadwal
     SET judul=?, deskripsi=?, tipe=?, hari=?, waktu=?, durasi=?, kategori=?, status=?, warna=?, updated_at=NOW()
     WHERE id=?`,
    [judul, deskripsi, tipe, hari, waktu, durasi, kategori, status, warna, id]
  );

  const [rows] = await db.execute("SELECT * FROM jadwal WHERE id = ?", [id]);
  return (rows as any[])[0];
});
