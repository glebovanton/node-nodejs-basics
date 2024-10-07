import { spawn } from 'child_process';
import path from "path";

const spawnChildProcess = async (args) => {
    const pathDir = 'src/cp/files';
    const file = path.join(path.resolve(), pathDir, 'script.js');
    const createChildProcess = (scriptPath, args) => {
        return spawn('node', [scriptPath, ...args], {
            stdio: ['pipe', 'pipe'],
        });
    };
    const connectStreams = (childProcess) => {
        process.stdin.pipe(childProcess.stdin);
        childProcess.stdout.pipe(process.stdout);
    };
    const childProcess = createChildProcess(file, args);

    connectStreams(childProcess);

    childProcess.on('exit', (code) => {
        console.log(`Process finished with code: ${code}`);
    });
};

await spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
