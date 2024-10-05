import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const child = fork(import.meta.dirname + '/files/script.js', args, {
    stdio: 'inherit',
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
