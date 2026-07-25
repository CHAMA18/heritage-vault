const { exec } = require('child_process');
const server = exec('npm run preview');
server.stdout.on('data', (data) => {
  console.log(data);
});
