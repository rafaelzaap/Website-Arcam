const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const carouselDirectory = path.resolve(__dirname, '..', 'public', 'carousel');
const configPath = path.join(carouselDirectory, 'config.json');
const supportedExtensions = new Set(['.gif', '.jpeg', '.jpg', '.png', '.webp']);

const imagePaths = fs.readdirSync(carouselDirectory)
  .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
  .sort((first, second) => first.localeCompare(second, 'en'))
  .map((fileName) => {
    const filePath = path.join(carouselDirectory, fileName);
    const version = crypto.createHash('sha256')
      .update(fs.readFileSync(filePath))
      .digest('hex')
      .slice(0, 12);

    return `/carousel/${fileName}?v=${version}`;
  });

fs.writeFileSync(configPath, `${JSON.stringify(imagePaths, null, 2)}\n`);
console.log(`Carrossel atualizado: ${imagePaths.length} imagem(ns) encontrada(s).`);
