import { createReadStream } from 'node:fs';

const readable = createReadStream(import.meta.dirname + '/files/fileToRead.txt', 'utf8');

readable.pipe(process.stdout);
