import * as fs from 'node:fs/promises';

try {
  await fs.writeFile(import.meta.dirname + '/files/fresh.txt', 'I am fresh and young', { flag: 'wx' });
} catch {
  throw new Error('FS operation failed');
}
