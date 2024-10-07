import * as fs from 'node:fs/promises';

try {
  const files = await fs.readdir(import.meta.dirname + '/files', { recursive: true });
  console.log(files);
} catch {
  throw new Error('FS operation failed');
}
