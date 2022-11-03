//Require 
const idioma = require("../controllers/idioma.controller.js");
const guia = require("../controllers/guia.controller.js");
const guia_idioma = require("../controllers/guia_idioma.controller.js");
const sala = require("../controllers/sala.controller.js");
const visita_guiada = require("../controllers/visita_guiada.controller.js");
const visita_guiada_idioma = require("../controllers/visita_guiada_idioma.controller.js");
const visita_guiada_salas = require("../controllers/visita_guiada_salas.controller.js");
const visita_guiada_visitante = require("../controllers/visita_guiada_visitante.controller.js");
const visitante = require("../controllers/visitante.controller.js");

function Router (){
    const Routes = {
        GET: {},
        POST: {},
        PUT: {},
        DEL: {}
    };
    
    const get = (url, callback) => {
      Routes.GET[url] = callback;
    }
    
    
    const post = (url, callback) => {
      Routes.POST[url] = callback;
    }
    
    
    const put = (url, callback) => {
      Routes.PUT[url] = callback;
    }
    
    
    const del = (url, callback) => {
      Routes.DEL[url] = callback;
    }
    
    return {
      'Routes': Routes,
      'get': get,
      'post': post,
      'put': put,
      'delete': del,
      'searchRoute':  (url, method) => {
         let route; 
            switch( method ) {
                case 'GET':  route = Routes.GET[url];    break;
                case 'POST': route = Routes.POST[url];   break;
                case 'PUT': route = Routes.PUT[url];     break;
                case 'DELETE': route = Routes.DEL[url];  break;
        
            }          
          return route;
      }
    }
    
}


const router = Router();
const routeSetter =  async (req, res, route) => {
    return new Promise((resolve, reject) =>{
    //VISITANTE
    router.post('/api/visitante', (req,res) =>      {visitante.crear(req,res)})
    router.get('/api/visitante', (req,res) =>       {visitante.consultarTodos(req,res)})
    router.get('/api/visitante/uid',  (req,res) =>  {visitante.obtenerUID(req,res)})
    router.get(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>     {const ID =req.url.split('/')[3]; visitante.consultarPID(req,res, ID)});
    router.put(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>     {const ID =req.url.split('/')[3]; visitante.actualizarPID(req, res, ID)});
    router.delete(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>  {const ID =req.url.split('/')[3]; visitante.borrarPID(req, res, ID)});

    //VISITA GUIADA
    router.post("/api/visita_guiada", (req, res) =>    { visita_guiada.crear(req, res)});
    router.get("/api/visita_guiada",  (req, res) =>    { visita_guiada.consultarTodos(req, res)});
    router.get("/api/visita_guiada/uid", (req, res) => { visita_guiada.obtenerUID(req,res)});
    router.get(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada.consultarPID(req, res, ID)});
    router.put(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada.actualizarPID(req, res, ID)});
    router.delete(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; visita_guiada.borrarPID(req, res, ID)});
   
    resolve(APIHandler(req, res, route))
    }).catch(error => console.log())  


}

const APIHandler =  async (_req , _res, route) => {
   // await routeSetter(_req, _res)
    await route(_req, _res)
    

}



module.exports = {
    router,
    routeSetter,
    APIHandler
}


/*

//Esto da pena, busca una mejor forma de hacerlo!!!!!!!
const APIHandler = (req, res) => {
    let id = ''
        if(req.method == 'POST'){
        switch(req.url){
            //VISITANTE
            case '/api/visitante': visitante.crear(req,res); break;
            //VISITA GUIADA
            case '/api/visita_guiada': visita_guiada.crear(req,res); break;
            //VISITA GUIADA IDIOMA
            case '/api/visita_guiada_idioma': visita_guiada_idioma.crear(req,res); break;
            //VISITA GUIADA SALAS
            case '/api/visita_guiada_salas': visita_guiada_salas.crear(req,res); break;
            //VISITA GUIADA VISITANTE
            case '/api/visita_guiada_visitante': visita_guiada_visitante.crear(req,res); break;
            //IDIOMA
            //NO ESTABLECIDO
            //SALA
            case '/api/sala': sala.crear(req,res); break;
            //GUIA
            case '/api/guia': guia.crear(req,res); break;
            //GUIA IDIOMA
            case '/api/guia_idioma': guia_idioma.crear(req,res); break;

            default:
                res.writeHead(404, {'Content-Type': 'application/JSON'})
                res.end(JSON.stringify({message: `La ruta ${req.url} no ha sido encontrada`}))
            break;
        }
    }
    else if(req.method == 'GET'){
        
        switch(req.url){
            //VISITANTE
            case '/api/visitante': visitante.consultarTodos(req,res); break;
            case '/api/visitante/uid': visitante.obtenerUID(req,res); break;
            case `/api/visitante/${req.url.split('/')[3]}`:  id = req.url.split('/')[3]; visitante.consultarPID(req,res,id); break;
            //VISITA GUIADA
            case '/api/visita_guiada': visita_guiada.consultarTodos(req,res); break;
            case '/api/visita_guiada/uid': visita_guiada.obtenerUID(req,res); break;
            case `/api/visita_guiada/${req.url.split('/')[3]}`:  id = req.url.split('/')[3]; visita_guiada.consultarPID(req,res,id); break;
            //VISITA GUIADA IDIOMA
            case '/api/visita_guiada_idioma': visita_guiada_idioma.consultarTodos(req,res); break;
            case '/api/visita_guiada_idioma/uid': visita_guiada_idioma.obtenerUID(req,res); break;
            case `/api/visita_guiada_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_idioma.consultarPID(req,res,id); break;
            //VISITA GUIADA SALAS
            case '/api/visita_guiada_salas': visita_guiada_salas.consultarTodos(req,res); break;
            case '/api/visita_guiada_salas/uid': visita_guiada_salas.obtenerUID(req,res); break;
            case `/api/visita_guiada_salas/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_salas.consultarPID(req,res,id); break;
            //VISITA GUIADA VISITANTE
            case '/api/visita_guiada_visitante': visita_guiada_visitante.consultarTodos(req,res); break;
            case '/api/visita_guiada_visitante/uid': visita_guiada_visitante.obtenerUID(req,res); break;
            case `/api/visita_guiada_visitante/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_visitante.consultarPID(req,res,id); break;
            //IDIOMA
            case '/api/idioma': idioma.consultarTodos(req,res); break;
            case `/api/idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; idioma.consultarPID(req,res,id); break;
            //SALA
            case '/api/sala': sala.consultarTodos(req,res); break;
            case `/api/sala/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; sala.consultarPID(req,res,id); break;
            //GUIA
            case '/api/guia': guia.consultarTodos(req,res); break;
            case '/api/guia/uid': guia.obtenerUID(req,res); break;
            case `/api/guia/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia.consultarPID(req,res,id); break;
            //GUIA IDIOMA
            case '/api/guia_idioma': guia_idioma.consultarTodos(req,res); break;
            case `/api/guia_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia_idioma.consultarPID(req,res,id); break;
            case `/api/guia_idioma/lang/${req.url.split('/')[4]}`: id = req.url.split('/')[4]; guia_idioma.consultarIPID(req,res,id); break;

            default:
                res.writeHead(404, {'Content-Type': 'application/JSON'})
                res.end(JSON.stringify({message: `La ruta ${req.url} no ha sido encontrada`}))
            break;

        }
    }
    else if(req.method == 'PUT'){
        switch(req.url){
            //VISITANTE
            case `/api/visitante/${req.url.split('/')[3]}`:  id = req.url.split('/')[3]; visitante.actualizarPID(req,res,id); break;
            //VISITA GUIADA
            case `/api/visita_guiada/${req.url.split('/')[3]}`:  id = req.url.split('/')[3]; visita_guiada.actualizarPID(req,res,id); break;
            //VISITA GUIADA IDIOMA
            case `/api/visita_guiada_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_idioma.actualizarPID(req,res,id); break;
            //VISITA GUIADA SALAS
            case `/api/visita_guiada_salas/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_salas.actualizarPID(req,res,id); break;
            //VISITA GUIADA VISITANTE
            case `/api/visita_guiada_visitante/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_visitante.actualizarPID(req,res,id);
            //IDIOMA
            //NO ESTABLECIDO
            //SALA
            case `/api/sala/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; sala.actualizarPID(req,res,id); break;
            //GUIA
            case `/api/guia/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia.actualizarPID(req,res,id); break;
            //GUIA IDIOMA
            case `/api/guia_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia_idioma.actualizarPID(req,res,id); break;
            case `/api/guia_idioma/pidi/${req.url.split('/')[4]}/${req.url.split('/')[5]}`: id = req.url.split('/')[4]; let idg = req.url.split('/')[5]; guia_idioma.actualizarPIDG(req,res,id,idg);

            default:
                res.writeHead(404, {'Content-Type': 'application/JSON'})
                res.end(JSON.stringify({message: `La ruta ${req.url} no ha sido encontrada`}))
            break;
        }
    }
    else if(req.method == 'DELETE'){
        switch(req.url){
            //VISITANTE
            case `/api/visitante/${req.url.split('/')[3]}`: const id = req.url.split('/')[3]; visitante.borrarPID(req,res,id); break;
            //VISITA GUIADA
            case `/api/visita_guiada/${req.url.split('/')[3]}`:  id = req.url.split('/')[3]; visita_guiada.borrarPID(req,res,id); break;
            //VISITA GUIADA IDIOMA
            case `/api/visita_guiada_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_idioma.borrarPID(req,res,id); break;
            //VISITA GUIADA SALAS
            case `/api/visita_guiada_salas/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_salas.borrarPID(req,res,id); break;
            //VISITA GUIADA VISITANTE
            case `/api/visita_guiada_visitante/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; visita_guiada_visitante.borrarPID(req,res,id);
            //IDIOMA
            //NO ESTABLECIDO
            //SALA
            case `/api/sala/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; sala.borrarPID(req,res,id); break;
            //GUIA
            case `/api/guia/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia.borrarPID(req,res,id); break;
            //GUIA IDIOMA
            case `/api/guia_idioma/${req.url.split('/')[3]}`: id = req.url.split('/')[3]; guia_idioma.borrarPID(req,res,id); break;

            default:
                res.writeHead(404, {'Content-Type': 'application/JSON'})
                res.end(JSON.stringify({message: `La ruta ${req.url} no ha sido encontrada`}))
            break;
        }
    }

}


module.exports = {
    APIHandler
}
*/



