import * as fs from 'node:fs/promises';

try {
  await fs.rm(import.meta.dirname + '/files/fileToRemove.txt');
} catch {
  throw new Error('FS operation failed');
}
