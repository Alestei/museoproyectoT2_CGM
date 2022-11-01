//@@ Modules
const http = require('http');
const fs = require('fs')
const path = require('path')
const {MIME_TYPES} = require ('./utils/utils')

//@@ Env Config
const PORT = process.env.PORT || 3000;

//@@ Routes
const controller = require('./utils/routes')
//-----------------//

const STATIC_PATH = path.join(process.cwd(), './src/view');

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];

  if (url.endsWith('/')) paths.push('index.html');

  const filePath = path.join(...paths);
   //filePath.split('.html')[1]

  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
   

  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);

  return { found, ext, stream };
};


const server = http.createServer(async (req, res) => {


    if(req.url.split('/')[1] === 'api'){
        controller.APIHandler(req,res)
    }else{
    
    const file = await prepareFile(req.url);     
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { 'Content-Type': mimeType });
    file.stream.pipe(res); 
    }
   
 
        console.log(`${req.method} ${req.url} `);
    

})

server.listen(PORT, () => console.log(`Servidor Iniciado || Puerto ${PORT}`))