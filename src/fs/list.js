import  { readdir } from 'node:fs/promises'
import path from "path";

const list = async () => {
    const pathDir = 'src/fs/files';
    const folder = path.join(path.resolve(), pathDir);
    try {
        const files = await readdir(folder);
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await list();
