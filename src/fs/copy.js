import { cp, stat } from 'node:fs/promises';
import path from 'path';

const copy = async () => {
    const oldDir = 'files';
    const newDir = `${oldDir}_copy`;
    const pathDir = 'src/fs';
    const currentDir = path.resolve();
    const filePathFrom = path.join(currentDir, pathDir, oldDir);
    const filePathTo = path.join(currentDir, pathDir, newDir);

    try {
        await stat(filePathTo);
        await cp(filePathFrom, filePathTo, { recursive: true, errorOnExist: true });
    } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await copy();
