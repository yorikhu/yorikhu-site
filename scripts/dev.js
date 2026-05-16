const { spawn } = require('child_process');
const path = require('path');

// Create clean environment without pnpm-specific npm env vars
const cleanEnv = { ...process.env };
delete cleanEnv.npm_config_recursive;
delete cleanEnv.npm_config_verify_deps_before_run;
cleanEnv.NODE_NO_WARNINGS = '1';

const API_PORT = 5000;
const WEB_PORT = 3000;

// Start API (shell mode is safe here since args are hardcoded literals)
const api = spawn('pnpm --filter api dev', {
  stdio: 'pipe',
  shell: true,
  cwd: path.join(__dirname, '..'),
  env: cleanEnv
});

// Start Web
const web = spawn('pnpm --filter web dev', {
  stdio: 'pipe',
  shell: true,
  cwd: path.join(__dirname, '..'),
  env: cleanEnv
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
      // ANSI escape codes to clear screen and move cursor to top-left
      process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
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
