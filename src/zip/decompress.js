import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const readable = createReadStream(import.meta.dirname + '/files/archive.gz');
const writable = createWriteStream(import.meta.dirname + '/files/fileToCompress.txt');

await pipeline(readable, createGunzip(), writable);
