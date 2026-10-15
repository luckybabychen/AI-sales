import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.cwd();
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.svg':'image/svg+xml' };
http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file = normalize(join(root, pathname === '/' ? 'index.html' : pathname.slice(1)));
    if (!file.startsWith(root)) throw new Error('invalid path');
    if ((await stat(file)).isDirectory()) file = join(file,'index.html');
    res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});
    res.end(await readFile(file));
  } catch {
    res.writeHead(404); res.end('Not found');
  }
}).listen(4173,'127.0.0.1');
