import { createWriteStream } from 'node:fs';

const writable = createWriteStream(import.meta.dirname + '/files/fileToWrite.txt');

process.stdin.on('data', (chunk) => writable.write(chunk));
