import { execSync } from 'child_process';
import { writeFileSync, appendFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to get directory size
function getDirectorySize(directory) {
    let size = 0;
    const files = readdirSync(directory);
    
    for (const file of files) {
        const filePath = join(directory, file);
        const stats = statSync(filePath);
        
        if (stats.isDirectory()) {
            size += getDirectorySize(filePath);
        } else {
            size += stats.size;
        }
    }
    
    return size;
}

// Function to format bytes to human readable size
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Create logs directory if it doesn't exist
const logsDir = join(__dirname, '..', 'logs');
if (!existsSync(logsDir)) {
    mkdirSync(logsDir);
}

// Create build log file with timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const logFile = join(logsDir, `build-${timestamp}.log`);

console.log('Starting build process...');
console.log(`Build logs will be saved to: ${logFile}`);

try {
    // Record build start time
    writeFileSync(logFile, `Build started at: ${new Date().toISOString()}\n\n`);

    // Run npm install and log output
    console.log('Installing dependencies...');
    const installOutput = execSync('npm install', { encoding: 'utf8' });
    appendFileSync(logFile, '=== NPM Install Output ===\n');
    appendFileSync(logFile, installOutput);
    appendFileSync(logFile, '\n\n');

    // Run build command and log output
    console.log('Building project...');
    const buildOutput = execSync('npm run build:vite', { encoding: 'utf8' });
    appendFileSync(logFile, '=== Build Output ===\n');
    appendFileSync(logFile, buildOutput);
    appendFileSync(logFile, '\n\n');

    // Get and log build size information
    const distPath = join(__dirname, '..', 'dist');
    const totalSize = getDirectorySize(distPath);
    const sizeInfo = `Total build size: ${formatBytes(totalSize)}`;
    
    appendFileSync(logFile, '=== Build Size ===\n');
    appendFileSync(logFile, sizeInfo);
    appendFileSync(logFile, '\n\n');

    // Get individual file sizes
    appendFileSync(logFile, '=== Individual File Sizes ===\n');
    const distFiles = readdirSync(distPath);
    for (const file of distFiles) {
        const filePath = join(distPath, file);
        const stats = statSync(filePath);
        if (stats.isFile()) {
            appendFileSync(logFile, `${file}: ${formatBytes(stats.size)}\n`);
        }
    }
    appendFileSync(logFile, '\n');

    // Record successful build completion
    appendFileSync(logFile, `Build completed successfully at: ${new Date().toISOString()}\n`);
    console.log('Build completed successfully!');
    console.log(sizeInfo);

} catch (error) {
    // Log any errors that occurred
    appendFileSync(logFile, '\n=== Build Error ===\n');
    appendFileSync(logFile, error.toString());
    appendFileSync(logFile, `\nBuild failed at: ${new Date().toISOString()}\n`);
    console.error('Build failed:', error.message);
    process.exit(1);
}
