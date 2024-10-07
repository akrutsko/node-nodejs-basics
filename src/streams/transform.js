import { Transform } from 'node:stream';
import { EOL } from 'node:os';

const transformable = new Transform({
  transform(chunk, _, callback) {
    const input = chunk.toString().trim();
    const reverse = input.split('').reverse().join('');
    callback(null, reverse + EOL);
  },
});

process.stdin.pipe(transformable).pipe(process.stdout);
