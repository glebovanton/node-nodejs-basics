import { createReadStream, createWriteStream } from "node:fs";
import zlib from 'node:zlib';
import path from "path";

const compress = async () => {
    const pathDir = 'src/zip/files';
    const file = path.join(path.resolve(), pathDir, 'fileToCompress.txt');
    const fileStream = createReadStream(file);
    const gzip = zlib.createGzip();
    const zipFile = path.join(path.resolve(), pathDir, 'archive.gz');
    const zipFileStream = createWriteStream(zipFile);

    fileStream
        .pipe(gzip)
        .pipe(zipFileStream)
};

await compress();
