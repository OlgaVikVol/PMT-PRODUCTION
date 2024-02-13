// path/fs
console.log('CLEAR CACHE');

const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const cacheFolderPath = path.join(nodeModulesPath, '.cache');

// Проверяем, существует ли папка .cache
if (fs.existsSync(cacheFolderPath)) {
    // Удаляем папку .cache
    fs.rmdirSync(cacheFolderPath, { recursive: true });
    console.log('.cache folder has been successfully deleted.');
} else {
    console.log('.cache folder does not exist.');
}
