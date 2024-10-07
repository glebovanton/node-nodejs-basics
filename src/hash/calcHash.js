import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream';
import path from "path";

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const pathDir = 'src/hash/files';
    const file = path.join(path.resolve(), pathDir, fileName);
    const algorithm = 'sha256'
    const hash = createHash(algorithm);

    pipeline(
        createReadStream(file),
        hash,
        (err) => {
            if (err) {
                console.error('Pipeline failed:', err);
            } else {
                const result = hash.digest('hex');
                console.log(`File: ${file}`);
                console.log(`${algorithm} hash: ${result}`);
            }
        }
    );
};

await calculateHash();
