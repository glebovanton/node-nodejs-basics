import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from "path";

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const pathDir = 'src/hash/files';
    const file = path.join(path.resolve(), pathDir, fileName);
    const algorithm = 'sha256'
    const hash = createHash(algorithm);

    const readable = createReadStream(file);

    readable.on('data', (chunk) => {
        hash.update(chunk);
    });

    readable.on('end', () => {
        const result = hash.digest('hex');
        console.log(`File: ${file}`);
        console.log(`${algorithm} hash: ${result}`);
    });

    readable.on('error', (err) => {
        console.error('Pipeline failed:', err);
    });
};

await calculateHash();
