// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importación de rutas 
const SamplingRouter = require('./routes/sampling.routes');
const UserRouter = require('./routes/user.routes');
const LogInRouter = require('./routes/login.routes');
// inicializar variables
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Cros
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://gatroxm.github.io/AppDeabetesServer');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
//Conección a la base de datos
const uri = 'mongodb://localhost:27017/control';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  mongoose.connect(uri, options)
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

//Rutas 

app.use('/sampling', SamplingRouter);
app.use('/user', UserRouter);
app.use('/login', LogInRouter);

//Iniciando el servidor
app.listen(3000, () => {
    console.log("Express server puerto 3000: \x1b[32m%s\x1b[0m   ", " online");
});