import {rename as fsRename, stat} from 'node:fs/promises'
import path from "path";

const rename = async () => {
    const currentDir = path.resolve();
    const pathDir = 'src/fs/files';
    const fileFrom = path.join(currentDir, pathDir, 'wrongFilename.txt');
    const fileTo = path.join(currentDir, pathDir, 'properFilename.md');

    try {
        await stat(fileTo);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                await stat(fileFrom);
                await fsRename(fileFrom, fileTo);
            } catch (error) {
                if (error.code === 'ENOENT') {
                    throw new Error('FS operation failed');
                }
                throw error;
            }
        } else {
            throw error;
        }
    }
};

await rename();
