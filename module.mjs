import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';
import { EOL } from 'node:os';
import { dirname } from 'node:path';
import { cwd } from 'node:process';

const rl = createInterface({ input, output, prompt: 'File Manager> ' });

rl.on('line', (line) => {
  rl.prompt();
});

rl.on('close', () => {
  console.log('CLOSE: Bye!');
  process.exit(0);
});

rl.on('SIGINT', () => {
  console.log('SIGINT: Bye!');
  process.exit(0);
});

rl.prompt();
