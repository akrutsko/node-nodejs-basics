import { createWriteStream } from 'node:fs';

const writable = createWriteStream(import.meta.dirname + '/files/fileToWrite.txt');

process.stdin.pipe(writable);
