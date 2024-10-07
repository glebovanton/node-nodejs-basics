const parseArgs = () => {
    const args = process.argv.slice(2);
    let matchingEnvs = [];
    const prefix = '--'

    for (let i = 0; i < args.length; i++) {
        const key = args[i];

        if (key.startsWith(prefix)) {
            const propName = key.replace(prefix, '');
            const value = args[i + 1];
            const propValue = value.startsWith(prefix) ? '' : value;

            matchingEnvs.push(`${propName} is ${propValue}`);
            i++;
        }
    }

    process.stdout.write(matchingEnvs.join('; '));
};

parseArgs();
