const envs = [];

Object.keys(process.env)
  .filter((key) => key.startsWith('RSS_'))
  .forEach((key) => {
    envs.push(`${key}=${process.env[key]}`);
  });

console.log(envs.join('; '));
