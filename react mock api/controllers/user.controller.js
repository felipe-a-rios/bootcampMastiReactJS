const jwt = require('jsonwebtoken');
const request = require('request-promise');

const { jwtSecret } = require('../handlers/authentication.handler');

/** Cria o Json Web Token utilizando as informações do usuário */
exports.login = (req, res, next) => {
  jwt.sign(req.user, jwtSecret, (err, token) => {
    if (err) {
      return next(err);
    }
    return res.send(`bearer ${token}`);
  });
};

/** Adiciona um novo usuário */
exports.create = async (req, res, next) => {
  const newUser = req.body;
  try {
    const options = {
      uri: 'http://localhost:4000/users',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newUser,
      json: true,
    };
    const response = await request.post(options);
    const user = {
      id: response.id,
      name: response.name,
    };
    jwt.sign(user, jwtSecret, (err, token) => {
      if (err) {
        return next(err);
      }
      newUser.id = user.id;
      newUser.accessToken = `bearer ${token}`;
      delete newUser.password;
      return res.status(201).json(newUser);
    });
  } catch (err) {
    return next(err);
  }
};

/** Adiciona cursos para um usuário */
exports.addCourses = async (req, res, next) => {
  const courses = req.body;
  const newCourses = [];

  for (let i = 0; i < courses.length; i++) {
    // Verifica se não é duplicado
    const duplicated = courses.some((course, index) => {
      if (index != i) {
        return course.id === courses[i].id;
      }
      return false;
    });
    if (duplicated) {
      const body = {
        error: `Curso de ID = ${courses[i].id} duplicado`,
      };
      return res.status(422).json(body);
    }

    const options = {
      uri: `http://localhost:4000/courses/${courses[i].id}`,
      json: true,
    };
    try {
      await request.get(options);
    } catch (err) {
      if (err.statusCode === 404) {
        const body = {
          error: `Curso de ID = ${courses[i].id} inexistente`,
        };
        return res.status(422).json(body);
      }
      return next(err);
    }

    const options2 = {
      uri: `http://localhost:4000/userCourses?userId=${req.user.id}&courseId=${courses[i].id}`,
      json: true,
    };
    try {
      const response = await request.get(options2);
      if (response.length > 0) {
        const body = {
          error: `Usuário já possui o curso de ID = ${courses[i].id}`,
        };
        return res.status(409).json(body);
      }
    } catch (err) {
      return next(err);
    }
  }

  for (let i = 0; i < courses.length; i++) {
    const userCourse = {
      userId: req.user.id,
      courseId: courses[i].id,
    };

    const options = {
      uri: 'http://localhost:4000/userCourses',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userCourse,
      json: true,
    };
    try {
      const response = await request.post(options);
      userCourse.id = response.id;
      newCourses.push(userCourse);
    } catch (err) {
      return next(err);
    }
  }

  return res.status(201).json(newCourses);
};

/** Busca o perfil do usuário */
exports.getProfile = async (req, res, next) => {
  let user = {};
  const options = {
    uri: `http://localhost:4000/users/${req.user.id}`,
    json: true,
  };
  try {
    user = await request.get(options);
  } catch (err) {
    return next(err);
  }

  delete user.password;
  user.courses = [];

  const options2 = {
    uri: `http://localhost:4000/userCourses?userId=${req.user.id}&_expand=course&_sort=courseId`,
    json: true,
  };
  try {
    const userCourses = await request.get(options2);
    userCourses.forEach((userCourse) => {
      user.courses.push(userCourse.course);
    });
  } catch (err) {
    return next(err);
  }

  return res.json(user);
};

/** Busca as aulas de um curso do usuário */
exports.getClasses = async (req, res, next) => {
  let userCourses = [];
  const options = {
    uri: `http://localhost:4000/userCourses?userId=${req.user.id}&courseId=${req.params.courseId}`,
    json: true,
  };
  try {
    userCourses = await request.get(options);
    if (userCourses.length === 0) {
      return res.sendStatus(404);
    }
  } catch (err) {
    return next(err);
  }

  let classes = [];
  const options2 = {
    uri: `http://localhost:4000/classes?courseId=${req.params.courseId}`,
    json: true,
  };
  try {
    classes = await request.get(options2);
    if (classes.length === 0) {
      return res.sendStatus(404);
    }
  } catch (err) {
    return next(err);
  }

  return res.json(classes);
};
