import { Transform } from 'node:stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        callback(null, reversedChunk);
    }
});

process.stdin.setEncoding('utf8');
process.stdout.write('Type your text and press enter to reverse (type "exit" to finish):'+'\n');

const transform = async () => {
    process.stdin.on('data', (input) => {
        if (input.trim() === 'exit') {
            process.exit();
        }
        reverseTransform.write(input);
    });
    reverseTransform.on('data', (reversed) => {
        process.stdout.write(reversed);
    });
};

await transform();
