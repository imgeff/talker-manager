const fs = require('fs');

function readFile(file, convertJS) {
  const nativeFile = fs.readFileSync(file, 'utf-8');
  if (convertJS) {
    const jsFile = JSON.parse(nativeFile);
    return jsFile;
  }
  return nativeFile;
}

function writeFile(file, content, convertJSON) {
  const contentFile = convertJSON ? JSON.stringify(content) : content;
  fs.writeFileSync(file, contentFile);
}

module.exports = {
  readFile,
  writeFile,
};