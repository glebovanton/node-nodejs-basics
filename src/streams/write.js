import { createWriteStream } from 'node:fs'
import path from "path";

const write = async () => {
    const fileName = 'fileToWrite.txt';
    const pathDir = 'src/streams/files';
    const file = path.join(path.resolve(), pathDir, fileName);
    const writeStream = createWriteStream(file);

    process.stdin.setEncoding('utf8');

    process.stdout.write(`Type you want to save in file ${file}:\n`);

    process.stdin.on('data', (input) => {
        const trimmedInput = input.trim();

        if (trimmedInput === 'exit') {
            process.exit();
        }

        writeStream.write(trimmedInput + '\n');
    });
};

await write();
