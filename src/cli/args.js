const args = process.argv.slice(2);
const flags = [];

args.forEach(
  (arg, index) =>
    index % 2 === 0 && flags.push(`${arg.slice(2)} is ${args[index + 1]}`)
);

console.log(flags.join(', '));
