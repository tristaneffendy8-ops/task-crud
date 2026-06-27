import { getDB } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const db = getDB();
  const body = await readBody(event);

  const { judul, deskripsi, tipe, hari, waktu, durasi, kategori, warna } = body;

  if (!judul || !tipe) {
    throw createError({ statusCode: 400, statusMessage: "Judul dan tipe wajib diisi" });
  }

  // PERBAIKAN: gunakan db.execute() async — bukan db.prepare().run() (itu syntax SQLite)
  const [result] = await db.execute(
    `INSERT INTO jadwal (judul, deskripsi, tipe, hari, waktu, durasi, kategori, warna)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      judul,
      deskripsi || "",
      tipe,
      hari || "",
      waktu || "",
      durasi || 60,
      kategori || "latihan",
      warna || "#6366f1",
    ]
  );

  const insertId = (result as any).insertId;
  const [rows] = await db.execute("SELECT * FROM jadwal WHERE id = ?", [insertId]);
  return (rows as any[])[0];
});
