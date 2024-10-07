import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const hash = createHash('sha256');
const readable = createReadStream(import.meta.dirname + '/files/fileToCalculateHashFor.txt');

readable.on('data', (chunk) => hash.update(chunk));
readable.on('end', () => console.log(hash.digest('hex')));
