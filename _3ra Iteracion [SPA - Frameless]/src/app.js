//@@ Modules
const http = require('http');
//@@ Env Config
const PORT = process.env.PORT || 3000;
const {MIME_TYPES} = require ('./utils/utils')

//@@ Router and fileHandler
const router = require('./utils/routes')
const {prepareFile} = require('./utils/fileHandler')
//-----------------//



const server = http.createServer(async (req, res) => {

    if(req.url.split('/')[1] === 'api'){
       router.APIHandler(req,res)
    }else{
    
    const file = await prepareFile(req.url);     
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { 'Content-Type': mimeType });
    file.stream.pipe(res); 
    }
    
    console.log(`${req.method} ${req.url} `);
  
})

server.listen(PORT, () => console.log(`**Servidor Iniciado || Puerto ${PORT}**`))