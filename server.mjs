import http from 'node:http';
import { readFile } from 'node:fs/promises';

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT harus berupa angka 1–65535.');
  process.exit(1);
}
const page = new URL('./index.html', import.meta.url);
const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  let path;
  try { path = new URL(req.url, 'http://localhost').pathname; }
  catch { res.writeHead(400); return res.end('Bad request'); }
  // Website ini self-contained: hanya index.html yang disajikan.
  if (path !== '/' && path !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end(req.method === 'HEAD' ? undefined : 'Halaman tidak ditemukan.');
  }
  try {
    const content = await readFile(page);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : 'Gagal membaca index.html.');
  }
});
server.on('error', err => {
  console.error(err.code === 'EADDRINUSE'
    ? 'Port ' + port + ' sedang dipakai. Tutup server sebelumnya atau pilih PORT lain.'
    : err.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log('Website Faza: http://localhost:' + port);
  console.log('Edit index.html, lalu refresh browser. Tekan Ctrl+C untuk berhenti.');
});
