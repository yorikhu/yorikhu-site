const { spawn } = require('child_process');
const path = require('path');

const cleanEnv = { ...process.env };
delete cleanEnv.npm_config_recursive;
delete cleanEnv.npm_config_verify_deps_before_run;
cleanEnv.NODE_NO_WARNINGS = '1';
cleanEnv.NODE_ENV = 'production';

const rootDir = path.join(__dirname, '..');

// Start API (run from apps/api to resolve dependencies correctly)
const api = spawn('pnpm', ['start'], {
  stdio: 'pipe',
  cwd: path.join(rootDir, 'apps/api'),
  shell: true,
  env: cleanEnv
});

// Start Web (run from apps/web for Next.js)
const web = spawn('pnpm', ['start'], {
  stdio: 'pipe',
  cwd: path.join(rootDir, 'apps/web'),
  shell: true,
  env: cleanEnv
});

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

api.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Nest application successfully started')) {
    apiReady = true;
    checkAndPrint();
  }
});

web.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Ready') || output.includes('started')) {
    webReady = true;
    checkAndPrint();
  }
});

api.stderr.on('data', (data) => {
  const output = data.toString();
  // Don't spam console with NestJS logs
  if (!output.includes('[Nest]')) {
    console.error('[API]', output.trim());
  }
});

web.stderr.on('data', (data) => {
  console.error('[Web]', data.toString().trim());
});

function checkAndPrint() {
  if (apiReady && webReady) {
    setTimeout(() => {
      process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
      console.log('');
      console.log('  ────────────────────────────────────────');
      console.log('         Production Server Started');
      console.log('');
      console.log('    ➜  Web:     http://localhost:3000');
      console.log('    ➜  API:     http://localhost:5000');
      console.log('    ➜  Swagger: http://localhost:5000/docs');
      console.log('');
      console.log('  ────────────────────────────────────────');
      console.log('');
    }, 500);
  }
}

api.on('exit', () => process.exit());
web.on('exit', () => process.exit());
