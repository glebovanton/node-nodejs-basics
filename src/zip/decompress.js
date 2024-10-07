import { createReadStream, createWriteStream } from "node:fs";
import zlib from 'node:zlib';
import path from "path";

const decompress = async () => {
    const pathDir = 'src/zip/files';
    const zipFile = path.join(path.resolve(), pathDir, 'archive.gz');
    const zipFileStream = createReadStream(zipFile);
    const file = path.join(path.resolve(), pathDir, 'fileToCompress.txt');
    const fileStream = createWriteStream(file);
    const gunzip = zlib.createGunzip();

    zipFileStream
        .pipe(gunzip)
        .pipe(fileStream)
        .on('error', (err) => {
            console.error('Error decompressing:', err);
        });
};

await decompress();
