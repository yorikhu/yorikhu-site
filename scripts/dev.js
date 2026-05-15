const { spawn } = require('child_process');
const path = require('path');

const API_PORT = 5000;
const WEB_PORT = 3000;

// Start API (shell mode is safe here since args are hardcoded literals)
const api = spawn('pnpm --filter api dev', {
  stdio: 'pipe',
  shell: true,
  cwd: path.join(__dirname, '..')
});

// Start Web
const web = spawn('pnpm --filter web dev', {
  stdio: 'pipe',
  shell: true,
  cwd: path.join(__dirname, '..')
});

// Handle spawn errors
api.on('error', (err) => {
  console.error('Failed to start API:', err.message);
  process.exit(1);
});

web.on('error', (err) => {
  console.error('Failed to start Web:', err.message);
  process.exit(1);
});

let apiReady = false;
let webReady = false;

// Pipe API output but capture ready signal
api.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Nest application successfully started')) {
    apiReady = true;
    checkAndPrint();
  }
});

// Pipe Web output but capture ready signal
web.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Ready in') || output.includes('started server')) {
    webReady = true;
    checkAndPrint();
  }
});

// Show original output
api.stderr.on('data', (data) => {
  console.error(data.toString());
});

web.stderr.on('data', (data) => {
  console.error(data.toString());
});

function checkAndPrint() {
  if (apiReady && webReady) {
    setTimeout(() => {
      console.clear();
      console.log('');
      console.log('  ────────────────────────────────────────');
      console.log('');
      console.log('    ➜  Web:     http://localhost:3000');
      console.log('    ➜  API:     http://localhost:5000');
      console.log('    ➜  Swagger: http://localhost:5000/api');
      console.log('');
      console.log('  ────────────────────────────────────────');
      console.log('');
    }, 500);
  }
}

// Handle exit
api.on('exit', () => process.exit());
web.on('exit', () => process.exit());

// Forward stdin
process.stdin.on('data', (data) => {
  api.stdin.write(data);
  web.stdin.write(data);
});
