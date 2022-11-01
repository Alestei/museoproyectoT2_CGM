/*
  //Visitante
    if(req.url === '/api/visitante' && req.method == 'POST'){
        visitante.crear(req,res)
    }
    else if(req.url === '/api/visitante' && req.method == 'GET'){
        visitante.consultarTodos(req,res)
    }
    else if(req.url === '/api/visitante/uid' && req.method == 'GET'){
        visitante.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/visitante\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        visitante.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visitante\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        visitante.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visitante\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        visitante.actualizarPID(req,res,id)
    
    }
    // Visita Guiada
    else if(req.url === '/api/visita_guiada' && req.method == 'POST'){
        visita_guiada.crear(req,res)
    }
    else if(req.url === '/api/visita_guiada' && req.method == 'GET'){
        visita_guiada.consultarTodos(req,res)
    }
    else if(req.url === '/api/visita_guiada/uid' && req.method == 'GET'){
        visita_guiada.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/visita_guiada\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        visita_guiada.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        visita_guiada.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        visita_guiada.actualizarPID(req,res,id)
    
    }
    // Visita Guiada Idioma
    else if(req.url === '/api/visita_guiada_idioma' && req.method == 'POST'){
        visita_guiada_idioma.crear(req,res)
    }
    else if(req.url === '/api/visita_guiada_idioma' && req.method == 'GET'){
        visita_guiada_idioma.consultarTodos(req,res)
    }
    else if(req.url === '/api/visita_guiada_idioma/uid' && req.method == 'GET'){
        visita_guiada_idioma.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/visita_guiada_idioma\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        visita_guiada_idioma.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_idioma\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        visita_guiada_idioma.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_idioma\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        visita_guiada_idioma.borrarPID(req,res,id)
    
    }

    // Visita Guiada Salas
    else if(req.url === '/api/visita_guiada_salas' && req.method == 'POST'){
        visita_guiada_salas.crear(req,res)
    }
    else if(req.url === '/api/visita_guiada_salas' && req.method == 'GET'){
        visita_guiada_salas.consultarTodos(req,res)
    }
    else if(req.url === '/api/visita_guiada_salas/uid' && req.method == 'GET'){
        visita_guiada_salas.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/visita_guiada_salas\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        visita_guiada_salas.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_salas\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        visita_guiada_salas.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_salas\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        visita_guiada_salas.borrarPID(req,res,id)
    
    } 
    
    // Visita Guiada Visitante
    else if(req.url === '/api/visita_guiada_visitante' && req.method == 'POST'){
        visita_guiada_visitante.crear(req,res)
    }
    else if(req.url === '/api/visita_guiada_visitante' && req.method == 'GET'){
        visita_guiada_visitante.consultarTodos(req,res)
    }
    else if(req.url === '/api/visita_guiada_visitante/uid' && req.method == 'GET'){
        visita_guiada_visitante.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/visita_guiada_visitante\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        visita_guiada_visitante.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_visitante\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        visita_guiada_visitante.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/visita_guiada_visitante\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        visita_guiada_visitante.borrarPID(req,res,id)
    
    } 

    // Idioma
    else if(req.url === '/api/idioma' && req.method == 'GET'){
       idioma.consultarTodos(req,res)
    }
    else if(req.url.match(/\/api\/idioma\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        idioma.consultarPID(req,res,id)
    
    }

    // Sala
    else if(req.url === '/api/sala' && req.method == 'POST'){
         sala.crear(req,res)
    }    
    else if(req.url === '/api/sala'&& req.method == 'GET'){
        sala.consultarTodos(req,res)
    
    }
    else if(req.url.match(/\/api\/sala\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        sala.consultarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/sala\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        sala.actualizarPID(req,res,id)
    
    }
    else if(req.url.match(/\/api\/sala\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        sala.borrarPID(req,res,id)
    
    } 

  //Guia
    else if(req.url === '/api/guia' && req.method == 'POST'){
    guia.crear(req,res)
    }
    else if(req.url === '/api/guia' && req.method == 'GET'){
        guia.consultarTodos(req,res)
    }
    else if(req.url === '/api/guia/uid' && req.method == 'GET'){
        guia.obtenerUID(req,res)
    }
    else if(req.url.match(/\/api\/guia\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[3]
        guia.consultarPID(req,res,id)

    }
    else if(req.url.match(/\/api\/guia\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        guia.actualizarPID(req,res,id)

    }
    else if(req.url.match(/\/api\/guia\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        guia.actualizarPID(req,res,id)

    }

  //Guia Idioma
   else if(req.url === '/api/guia_idioma' && req.method == 'POST'){
        guia_idioma.crear(req,res)
    }
    else if(req.url === '/api/guia_idioma' && req.method == 'GET'){
        guia_idioma.consultarTodos(req,res)
    }
    else if(req.url.match(/\/api\/guia_idioma\/lang\/([0-9]+)/) && req.method == 'GET'){
        const id = req.url.split('/')[4]
        guia_idioma.consultarIPID(req,res,id)
    }
    else if(req.url.match(/\/api\/guia_idioma\/([0-9]+)/) && req.method == 'GET'){
        
        const id = req.url.split('/')[3]
        guia_idioma.consultarPID(req,res,id)

    }
    else if(req.url.match(/\/api\/guia_idioma\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[3]
        guia_idioma.actualizarPID(req,res,id)

    }
    else if(req.url.match(/\/api\/guia_idioma\/pidi\/([0-9]+)\/([0-9]+)/) && req.method == 'PUT'){
        const id = req.url.split('/')[4]
        const idg = req.url.split('/')[5]
        guia_idioma.actualizarPIDG(req,res,id,idg)

    }
    else if(req.url.match(/\/api\/guia_idioma\/([0-9]+)/) && req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        guia_idioma.borrarPIDI(req,res,id)

    }

    else{
        res.writeHead(404, {'Content-Type': 'application/JSON'})
        res.end(JSON.stringify({message: 'Ruta no encontrada'}))
    }
*/