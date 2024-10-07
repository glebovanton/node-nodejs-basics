import  { readFile } from 'node:fs/promises'
import path from "path";

const read = async () => {
    const pathDir = 'src/fs/files';
    const fileName = 'fileToRead.txt'
    const file = path.join(path.resolve(), pathDir, fileName);

    try {
        const contents = await readFile(file, { encoding: 'utf-8' });

        console.log(contents);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await read();
