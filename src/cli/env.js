const envs = Object.keys(process.env)
  .filter((key) => key.startsWith('RSS_'))
  .map((key) => `${key}=${process.env[key]}`);

console.log(envs.join('; '));
