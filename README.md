# Website-Faza

Portofolio Faza Sadikin. Semua tampilan, CSS, dan JavaScript website berada di `index.html`.

## Jalankan di localhost

1. Install Node.js versi LTS dari https://nodejs.org/ (sudah termasuk npm).
2. Download repo lewat **Code → Download ZIP**, lalu ekstrak. Atau clone repo ini.
3. Buka folder hasil ekstrak di VS Code.
4. Pilih **Terminal → New Terminal**, kemudian jalankan:

```sh
npm start
```

5. Buka **http://localhost:3000** di browser komputer yang sama.
6. Untuk berhenti, tekan **Ctrl+C** di terminal.

Tidak perlu `npm install`: server memakai modul bawaan Node.js tanpa dependency tambahan.
Perintah `npm run dev` juga tersedia. Setelah mengedit `index.html`, refresh browser.

Server hanya menerima koneksi dari komputer sendiri. Localhost bukan alamat publik.
Font Google dan tautan Instagram/TikTok memerlukan internet.

Jika port 3000 sedang dipakai, di PowerShell gunakan:

```powershell
$env:PORT=3001
npm start
```

Lalu buka http://localhost:3001.

## File

- `index.html`: website lengkap, termasuk CV tanpa nomor HP.
- `server.mjs`: server localhost.
- `package.json`: perintah menjalankan server.

## GitHub Pages

Untuk publikasi statis: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
GitHub Pages menyajikan `index.html`; server localhost tidak diperlukan untuk hosting tersebut.
