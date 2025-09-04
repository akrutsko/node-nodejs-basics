import { existsSync } from 'node:fs';
import * as fs from 'node:fs/promises';

if (existsSync(import.meta.dirname + '/files/properFilename.md')) {
  throw new Error('FS operation failed');
}

try {
  await fs.rename(import.meta.dirname + '/files/wrongFilename.txt', import.meta.dirname + '/files/properFilename.md');
} catch {
  throw new Error('FS operation failed');
}
