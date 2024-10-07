import { fork } from 'node:child_process';

const spawnChildProcess = (args) => {
  fork(import.meta.dirname + '/files/script.js', args, { stdio: 'inherit' });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
