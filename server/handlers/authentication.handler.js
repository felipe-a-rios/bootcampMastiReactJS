const request = require('request-promise');

exports.jwtSecret = 'segredinho';

/** Valida as credenciais do usuário utilizando autorização básica com login e senha */
exports.validateBasic = async (username, password, done) => {
  try {
    const options = {
      uri: `http://localhost:4000/users?email=${username}&password=${password}&_limit=1`,
      json: true,
    };
    const users = await request.get(options);
    if (users.length === 0) {
      return done(null, false);
    }
    const user = {
      id: users[0].id,
      name: users[0].name,
    };
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

/** Valida as credenciais do usuário utilizando autorização JWT */
exports.validateJWT = (jwtPayload, done) => {
  done(null, { id: jwtPayload.id });
};
