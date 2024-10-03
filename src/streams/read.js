import { createReadStream } from 'node:fs';

const readable = createReadStream(import.meta.dirname + '/files/fileToRead.txt', 'utf8');
readable.on('data', (chunk) => process.stdout.write(chunk));
