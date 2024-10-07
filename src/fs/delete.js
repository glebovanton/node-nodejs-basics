import { unlink } from "fs/promises";
import path from 'path';

const remove = async () => {
    const currentDir = path.resolve();
    const pathDir = 'src/fs/files';
    const file = path.join(currentDir, pathDir, 'fileToRemove.txt');

    try {
        await unlink(file)
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();
