const express = require('express');
const jsonServer = require('json-server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const authHandler = require('./handlers/authentication.handler');
const user = require('./routes/user.router');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const router = jsonServer.router('db.json');
const port = 4000;

app.use(cors());
app.use(express.json());
// Passport é um middleware de Autenticação
app.use(passport.initialize());
// Inicializa a autenticação básica via username e senha
passport.use(new LocalStrategy(authHandler.validateBasic));
// Inicializa autenticação via Json Web Token
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = authHandler.jwtSecret;
passport.use(new JwtStrategy(opts, authHandler.validateJWT));

// Routes
app.get('/', (req, res) => res.sendStatus(200));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', user);

app.use(router);

// Processa rota não encontrada
app.use((_, res) => {
  res.sendStatus(404);
});

// Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, _, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('JSON Server is running');
});
