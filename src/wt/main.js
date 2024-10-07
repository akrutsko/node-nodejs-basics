import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const { length: cores } = cpus();

const fibonacci = [];

for (let i = 0; i < cores; i++) {
  const worker = new Worker(import.meta.dirname + '/worker.js', {
    workerData: 10 + i,
  });

  const { promise, resolve, reject } = Promise.withResolvers();
  fibonacci.push(promise);

  worker.on('message', resolve);
  worker.on('error', reject);
}

Promise.allSettled(fibonacci)
  .then((res) =>
    res.map((calc) => ({
      status: calc.status === 'fulfilled' ? 'resolved' : 'error',
      data: calc.value || null,
    })),
  )
  .then(console.log);
