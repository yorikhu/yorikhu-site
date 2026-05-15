const { spawn } = require('child_process');

const next = spawn('npx next dev', {
  stdio: 'inherit',
  shell: true
});

next.on('error', (err) => {
  console.error('Failed to start Next.js:', err.message);
  process.exit(1);
});

next.on('exit', () => {
  process.exit();
});
