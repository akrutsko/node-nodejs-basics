import { Transform } from 'node:stream';

const transformable = new Transform({
  transform(chunk, _, callback) {
    const input = chunk.toString().trim();
    const reverse = input.split('').reverse().join('');
    this.push(reverse + '\n');
    callback();
  },
});

process.stdin.pipe(transformable).on('error', console.error).pipe(process.stdout).on('error', console.error);
