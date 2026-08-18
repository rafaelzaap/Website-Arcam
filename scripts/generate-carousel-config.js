const fs = require('fs');
const path = require('path');

const supportedExtensions = new Set(['.gif', '.jpeg', '.jpg', '.png', '.webp']);

function generateConfig(folderName) {
  const imageDirectory = path.resolve(__dirname, '..', 'public', folderName);
  const configPath = path.join(imageDirectory, 'config.json');

  fs.mkdirSync(imageDirectory, { recursive: true });

  const imagePaths = fs.readdirSync(imageDirectory)
    .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, 'en'))
    .map((fileName) => {
      const filePath = path.join(imageDirectory, fileName);
      const fileStats = fs.statSync(filePath);
      const version = `${Math.round(fileStats.mtimeMs)}-${fileStats.size}`;

      return `/${folderName}/${encodeURIComponent(fileName)}?v=${version}`;
    });

  fs.writeFileSync(configPath, `${JSON.stringify(imagePaths, null, 2)}\n`);
  console.log(`${folderName}: ${imagePaths.length} imagem(ns) encontrada(s).`);
}

generateConfig('carousel');
generateConfig('fotos');
