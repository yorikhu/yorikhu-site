const { spawn } = require('child_process');

// Use npx.cmd on Windows, npx on other platforms
const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const next = spawn(npxCmd, ['next', 'dev'], {
  stdio: 'inherit'
});

next.on('error', (err) => {
  console.error('Failed to start Next.js:', err.message);
  process.exit(1);
});

next.on('exit', () => {
  process.exit();
});
