const parseEnv = () => {
    const matchingEnvs = process.argv.slice(2).filter(function (val) {
        const prefix = 'RSS_'
        return val.indexOf(prefix) === 0
    });

    process.stdout.write(matchingEnvs.join('; '));
};

parseEnv();
