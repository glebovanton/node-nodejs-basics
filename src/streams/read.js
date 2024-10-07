import { createReadStream } from "fs";
import path from "path";

const read = async () => {
    const fileName = 'fileToRead.txt';
    const pathDir = 'src/streams/files';
    const file = path.join(path.resolve(), pathDir, fileName);
    const readable = createReadStream(file);

    readable.on('readable', () => {
        let chunk
        while ((chunk = readable.read()) !== null ) {
            process.stdout.write(chunk);
        }
    })

    readable.on('error', (err) => {
        console.error('Stream failed:', err);
    });
};

await read();
