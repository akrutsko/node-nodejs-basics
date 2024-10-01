import * as fs from 'node:fs/promises';

try {
  const fileContent = await fs.readFile(import.meta.dirname + '/files/fileToRead.txt', 'utf8');
  console.log(fileContent);
} catch {
  throw new Error('FS operation failed');
}
