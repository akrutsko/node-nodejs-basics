import * as fs from 'node:fs/promises';

try {
  await fs.cp(import.meta.dirname + '/files', import.meta.dirname + '/files_copy', {
    recursive: true,
    errorOnExist: true,
    force: false,
  });
} catch {
  throw new Error('FS operation failed');
}
