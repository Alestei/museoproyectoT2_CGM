// @@ MODULES 
const fs = require('fs')
const path = require('path')
//

//FILEHANDLER
const STATIC_PATH = path.join(process.cwd(), './src/view');

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];

  if (url.endsWith('/')) paths.push('index.html');

  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
   
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);

  return { found, ext, stream };
};

//No agarra parámetros en la URL /\ (eso es una flecha, acuerdate)


module.exports = {
    prepareFile
}