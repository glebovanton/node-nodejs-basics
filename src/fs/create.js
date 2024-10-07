import { writeFile } from 'node:fs/promises';
import path from 'path';

const create = async () => {
    const content = 'I am fresh and young';
    const fileName = 'fresh.txt';
    const pathDir = 'src/fs/files';
    const filePath = path.join(path.resolve(), pathDir, fileName);

    try {
        await writeFile(filePath, content, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } else {
            console.error(error.message);
        }
    }
};

await create();
