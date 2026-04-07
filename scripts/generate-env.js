const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, '../app/src/environments');

const targetPath = path.join(envDir, 'environment.prod.ts');

const content = `export const environment = {
  production: true,
  api_url: 'http://${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}'
};
`;

fs.writeFileSync(targetPath, content, { encoding: 'utf8' });

console.log(`Generated ${targetPath}`);