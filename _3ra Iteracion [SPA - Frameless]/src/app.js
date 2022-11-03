//@@ Modules
const http = require('http');
const url = require('url')
//@@ Env Config
const PORT = process.env.PORT || 3000;
const {MIME_TYPES} = require ('./utils/utils')

//@@ Router and fileHandler
const routes = require('./routes/routes'); const router = routes.router;
const {prepareFile} = require('./utils/fileHandler')
//-----------------//



const server = http.createServer(async (req, res) => {

    if(req.url.split('/')[1] === 'api'){
       
        let URIDATA = {
            parsedURL: url.parse(req.url, true),
            path: '',
            qs: '',
            headers: req.headers,
            method: req.method.toLowerCase()
        }
        URIDATA.path = URIDATA.parsedURL.pathname;
        URIDATA.qs = URIDATA.parsedURL.query;
        //URIDATA.path = URIDATA.path.replace(/^\/+|\/+$/g, "");
        //console.log(URIDATA) 
        
        req.on("data", buffer => {
            const strJSON = buffer.toString('utf-8')
            req.body = strJSON
            req.params = JSON.parse(JSON.stringify(URIDATA.parsedURL.query));
        });
        req.on("end", _ => {
          const route =
            typeof router.searchRoute(URIDATA.path, req.method) !== "undefined" 
            ? router.searchRoute(URIDATA.path, req.method) 
            : (req, res) => { res.writeHead(404); res.end('NOT FOUND') };
       
      
            routes.routeSetter(req, res, route)
        });
                
                
        
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