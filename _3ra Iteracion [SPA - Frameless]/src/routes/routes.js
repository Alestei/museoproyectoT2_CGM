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
const routeSetter =   (req, res) => {
    //VISITANTE
    router.post('/api/visitante', (req,res) =>      {visitante.crear(req,res)})
    router.get('/api/visitante', (req,res) =>       {visitante.consultarTodos(req,res)})
    router.get('/api/visitante/uid/',  (req,res) =>  {visitante.obtenerUID(req,res)})
    router.get(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>     {const ID =req.url.split('/')[3]; visitante.consultarPID(req,res, ID)});
    router.put(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>     {const ID =req.url.split('/')[3]; visitante.actualizarPID(req, res, ID)});
    router.delete(`/api/visitante/${req.url.split('/')[3]}`, (req,res) =>  {const ID =req.url.split('/')[3]; visitante.borrarPID(req, res, ID)});

    //VISITA GUIADA
    router.post("/api/visita_guiada", (req, res) =>    { visita_guiada.crear(req, res)});
    router.get("/api/visita_guiada",  (req, res) =>    { visita_guiada.consultarTodos(req, res)});
    router.get("/api/visita_guiada/uid/", (req, res) => { visita_guiada.obtenerUID(req,res)});
    router.get(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada.consultarPID(req, res, ID)});
    router.put(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada.actualizarPID(req, res, ID)});
    router.delete(`/api/visita_guiada/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; visita_guiada.borrarPID(req, res, ID)});

    //VISITA GUIADA IDIOMA
    router.post("/api/visita_guiada_idioma", (req, res) =>    { visita_guiada_idioma.crear(req, res)});
    router.get("/api/visita_guiada_idioma",  (req, res) =>    { visita_guiada_idioma.consultarTodos(req, res)});
//  router.get("/api/visita_guiada_idioma/uid", (req, res) => { visita_guiada_idioma.obtenerUID(req,res)});
    router.get(`/api/visita_guiada_idioma/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_idioma.consultarPID(req, res, ID)});
    router.put(`/api/visita_guiada_idioma/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_idioma.actualizarPID(req, res, ID)});
    router.delete(`/api/visita_guiada_idioma/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; visita_guiada_idioma.borrarPID(req, res, ID)});

    //VISITA GUIADA SALAS
    router.post("/api/visita_guiada_salas", (req, res) =>    { visita_guiada_salas.crear(req, res)});
    router.get("/api/visita_guiada_salas",  (req, res) =>    { visita_guiada_salas.consultarTodos(req, res)});
//  router.get("/api/visita_guiada_salas/uid/", (req, res) => { visita_guiada_salas.obtenerUID(req,res)});
    router.get(`/api/visita_guiada_salas/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_salas.consultarPID(req, res, ID)});
    router.put(`/api/visita_guiada_salas/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_salas.actualizarPID(req, res, ID)});
    router.delete(`/api/visita_guiada_salas/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; visita_guiada_salas.borrarPID(req, res, ID)});

    //VISITA GUIADA VISITANTE
    router.post("/api/visita_guiada_visitante", (req, res) =>    { visita_guiada_visitante.crear(req, res)});
    router.get("/api/visita_guiada_visitante",  (req, res) =>    { visita_guiada_visitante.consultarTodos(req, res)});
//  router.get("/api/visita_guiada_visitante/uid", (req, res) => { visita_guiada_visitante.obtenerUID(req,res)});
    router.get(`/api/visita_guiada_visitante/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_visitante.consultarPID(req, res, ID)});
    router.put(`/api/visita_guiada_visitante/${req.url.split('/')[3]}`, (req, res) =>    {const ID =req.url.split('/')[3]; visita_guiada_visitante.actualizarPID(req, res, ID)});
    router.delete(`/api/visita_guiada_visitante/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; visita_guiada_visitante.borrarPID(req, res, ID)});

    //IDIOMA  
    router.get("/api/idioma", (req,res) => { idioma.consultarTodos(req,res)});
    router.get(`/api/idioma/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; idioma.consultarPID(req,res,ID)});

    //SALA
    router.post(`/api/sala`, (req,res) => {sala.crear(req,res)});
    router.get(`/api/sala`, (req,res) => {sala.consultarTodos(req,res)});
    router.get(`/api/sala/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; sala.consultarPID(req,res,ID)});
    router.put(`/api/sala/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; sala.actualizarPID(req,res,ID)});
    router.delete(`/api/sala/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; sala.borrarPID(req,res,ID)});
      
    //GUIA IDIOMA
    router.post(`/api/guia_idioma`, (req,res) => { guia_idioma.crear(req,res)}); 
    router.get(`/api/guia_idioma`, (req,res) =>  {guia_idioma.consultarTodos(req,res)});
    router.get(`/api/guia_idioma/lang/${req.url.split('/')[4]}`, (req,res) => {const ID =req.url.split('/')[4]; guia_idioma.consultarIPID(req,res,ID)});
    router.get(`/api/guia_idioma/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; guia_idioma.consultarPID(req,res,ID)});
    router.put(`/api/guia_idioma/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; guia_idioma.actualizarPID(req,res,ID)});
    router.put(`/api/guia_idioma/pidg/${req.url.split('/')[4]}/${req.url.split('/')[5]}`, (req,res) => {const IDI =req.url.split('/')[4]; const IDG =req.url.split('/')[5];  guia_idioma.actualizarPIDG(req,res,IDI,IDG)});
    router.delete(`/api/guia_idioma/${req.url.split('/')[3]}`, (req,res) => {const ID =req.url.split('/')[3]; guia_idioma.borrarPID(req,res,ID)});
    router.delete(`/api/guia_idioma/pidi/${req.url.split('/')[4]}/${req.url.split('/')[5]}`, (req,res) => {const IDI =req.url.split('/')[4]; const IDG =req.url.split('/')[5]; guia_idioma.borrarPIDI(req,res,IDI,IDG)});

    //GUIA
    router.post("/api/guia", (req,res) =>  {guia.crear(req,res)});
    router.get("/api/guia", (req,res) => { guia.consultarTodos(req,res)});
    router.get("/api/guia/uid/", (req,res) =>  {guia.obtenerUID(req,res)});
    router.get(`/api/guia/${req.url.split('/')[3]}`, (req,res) =>  {const ID = req.url.split('/')[3]; guia.consultarPID(req,res,ID)});
    router.put(`/api/guia/${req.url.split('/')[3]}`, (req,res) =>  {const ID = req.url.split('/')[3]; guia.actualizarPID(req,res,ID)});
    router.delete(`/api/guia/${req.url.split('/')[3]}`, (req,res) =>  {const ID = req.url.split('/')[3]; guia.borrarPID(req,res,ID)});
}





module.exports = {
    router,
    routeSetter,
}


