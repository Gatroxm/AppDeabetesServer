// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
//Importación de rutas 
const SamplingRouter = require('./routes/sampling.routes');
const UserRouter = require('./routes/user.routes');
const LogInRouter = require('./routes/login.routes');
const NewsRouter = require('./routes/new.routes');
const UploadRouter = require('./routes/upload.routes');
const ImagesRouter = require('./routes/images.routes');
const QuizRouter = require('./routes/quiz.routes');
// inicializar variables
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());

// parse application/json
app.use(bodyParser.json())

//Cros
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://appdeabetesserver.onrender.com/');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
//Conección a la base de datos
const uri = 'mongodb+srv://user_app_diabetes:snPDBEheJe86kw4t@appdeavetes.urxfdpx.mongodb.net/AppDeavetes';

app.use(express.static(path.join(__dirname, 'public')));
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

app.use('/api/sampling', SamplingRouter);
app.use('/api/user', UserRouter);
app.use('/api/login', LogInRouter);
app.use('/api/new', NewsRouter);
app.use('/api/upload', UploadRouter);
app.use('/api/images', ImagesRouter);
app.use('/api/quiz', QuizRouter);

//Iniciando el servidor
app.listen(3000, () => {
    console.log("Express server puerto 3000: \x1b[32m%s\x1b[0m   ", " online");
});