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
            case req.url.match(/\/api\/visitante\/([0-9]+)/)[0]: const id = req.url.split('/')[3]; visitante.borrarPID(req,res,id); break;
            //VISITA GUIADA
            case req.url.match(/\/api\/visita_guiada\/([0-9]+)/)[0]:  id = req.url.split('/')[3]; visita_guiada.borrarPID(req,res,id); break;
            //VISITA GUIADA IDIOMA
            case req.url.match(/\/api\/visita_guiada_idioma\/([0-9]+)/)[0]: id = req.url.split('/')[3]; visita_guiada_idioma.borrarPID(req,res,id); break;
            //VISITA GUIADA SALAS
            case req.url.match(/\/api\/visita_guiada_salas\/([0-9]+)/)[0]: id = req.url.split('/')[3]; visita_guiada_salas.borrarPID(req,res,id); break;
            //VISITA GUIADA VISITANTE
            case req.url.match(/\/api\/visita_guiada_visitante\/([0-9]+)/)[0]: id = req.url.split('/')[3]; visita_guiada_visitante.borrarPID(req,res,id);
            //IDIOMA
            //NO ESTABLECIDO
            //SALA
            case req.url.match(/\/api\/sala\/([0-9]+)/): id = req.url.split('/')[3]; sala.borrarPID(req,res,id); break;
            //GUIA
            case req.url.match(/\/api\/guia\/([0-9]+)/): id = req.url.split('/')[3]; guia.borrarPID(req,res,id); break;
            //GUIA IDIOMA
            case req.url.match(/\/api\/guia_idioma\/([0-9]+)/): id = req.url.split('/')[3]; guia_idioma.borrarPIDI(req,res,id); break;

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
    



