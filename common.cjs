const { Readable } = require('stream');

class NumberStream extends Readable {
  constructor() {
    super({ objectMode: true });
    this.current = 1;
  }

  _read() {
    if (this.current <= 5) {
      this.push(this.current++); // Push current number
    } else {
      this.push(null); // Signal end of stream
    }
  }
}

const numberStream = new NumberStream();

numberStream.on('data', (chunk) => {
  console.log('Received:', chunk);
  // Unshift the chunk back into the stream for another consumer
  const random = Math.random() > 0.5;
  console.log('random', random);
  numberStream.unshift(random ? chunk : null);
});

numberStream.on('end', () => {
  console.log('Stream ended');
});
