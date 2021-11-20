const DB = require ('../database/connect.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

const userExist = (req, res, next) => {
    const { email} = req.body;
    const SQLsentence = 'SELECT * FROM users WHERE email = ?';

    DB.query(SQLsentence, [email], (err,row) => {
        if(err) {
            console.log(err);
        } else {
            if(row.length < 1) {
                return res.send("Email does not exist");
            }
            next();
        }
    })
}

const userCopy = (req, res, next) => {
    const { email} = req.body;
    const SQLsentence = 'SELECT * FROM Usuarios WHERE email = ?'
    DB.query(SQLsentence, [email], (err,row) => {
        if(err) {
            console.log(err);
        } else {
            if(row.length > 0) {
                return res.send("Email already exist in database").status(409);
            }
            next();
        }
    })
}

const queryPassword = (req, res, next) => {
    const {email, password} = req.body; // Middlewear necesario? -> Username existe? Password Existe?
    const sentenceSQL = 'SELECT * FROM users WHERE email = ?';
    // bcrypt.compareSync(password, row[0].password)
    DB.query(sentenceSQL, [username, username, password], (err, row) => {
        if (err) {
            console.log(err)
        } else {
            if (!bcrypt.compareSync(password, row[0].password)) {
                return res.send("Password is not valid");
            }
            next();
        }
    })
}

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    let token = authorization.split(' ')[1];
    jwt.verify(token, process.env.PASSWORD, (err) => {
        if(err) {
            console.log(err)
            res.send('Token provided is invalid').status(401);
            return;
        } else {
            next();
        }
    })
}

module.exports = {
    userExist, queryPassword,
    userCopy,
    validateToken
}