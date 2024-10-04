import { createGzip, Gzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const readable = createReadStream(import.meta.dirname + '/files/fileToCompress.txt');
const writable = createWriteStream(import.meta.dirname + '/files/archive.gz');

pipeline(readable, createGzip(), writable).catch(console.error);
