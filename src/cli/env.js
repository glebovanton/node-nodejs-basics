const parseEnv = () => {
    const prefix = 'RSS_';
    const matchingEnvs = Object.keys(process.env)
        .filter(key => key.startsWith(prefix))
        .map(key => `${key}=${process.env[key]}`);

    process.stdout.write(matchingEnvs.join('; '));
};

parseEnv();
