const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

	
//Routes
    //Visitante
        require('./routes/visitante.routes')(app);
    //... 
        require('./routes/idioma.routes')(app);
        require('./routes/sala.routes')(app);
    //Guia
        require('./routes/guia.routes')(app);
        require('./routes/guia_idioma.routes')(app);
    //Visita Guiada
        require('./routes/visita_guiada.routes')(app);
        require('./routes/visita_guiada_idioma.routes')(app);
        require('./routes/visita_guiada_salas.routes')(app);
        require('./routes/visita_guiada_visitante.routes')(app);

app.use(express.static( __dirname + '/views'))
//app.use(require('./routes/index'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server iniciado en el puerto ${app.get('port')}`);
});