const DB = require ('../database/connect.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

require('dotenv').config();


// GET - URL
const getIndexURL = (req, res) => {
    let url = process.cwd() + '/public/html/index.html'
    res.sendFile(path.resolve(url))
}


// GET DATA BY DEFAULT / CATEGORY / MONTH

const getOperationsDefault = (req, res) => {
    const SQLSentence = `SELECT * FROM operations ORDER BY time DESC  LIMIT 10`

    DB.query(SQLSentence, (err, row) => {
        if(err) {
            console.log(err)
        } else {
            console.log(row)
            res.send(row);
        }
    })
}

const getAllOperations = (req, res) => {
    const SQLSentence = `SELECT * FROM operations ORDER BY time DESC`

    DB.query(SQLSentence, (err, row) => {
        if(err) {
            console.log(err)
        } else {
            console.log(row)
            res.send(row);
        }
    })
}

// POST - SHOW INFO

const postOperationSearchCategory = (req, res) => {
    const {category} = req.body;
    const SQLSentence = `SELECT * FROM operations WHERE category = ${JSON.stringify(category)} ORDER BY time DESC`

    DB.query(SQLSentence, (err, row) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Done");
            res.send(row);
        }
    })
}

const postOperationSearchDate = (req, res) => {
    const {min_M, max_M, min_D, max_D, min_Y, max_Y} = req.body;

    if (min_D == 31 && max_D == 1) {
        const SQLSentence = `SELECT * FROM operations WHERE time BETWEEN '${min_Y}-${min_M}-${min_D}' AND '${max_Y}-${max_M}-${max_D}' ORDER BY time DESC`
        DB.query(SQLSentence, (err, row) => {
            if(err) {
                console.log(err)
            } else {
                console.log(row)
                res.send(row);
            }
        })
    } else {
        let realMonth = min_M;
        const SQLSentence = `SELECT * FROM operations WHERE time BETWEEN '${min_Y}-${realMonth}-${min_D}' AND '${max_Y}-${realMonth}-${max_D}' ORDER BY time DESC`
        DB.query(SQLSentence, (err, row) => {
            if(err) {
                console.log(err)
                
            } else {
                console.log(row)
                res.send(row);
            }
        })
    }
}

// POST

const postOperation = (req, res) => {
    const {amount, category, concept, type} = req.body;
    const SQLSentence = `INSERT INTO operations SET ?`

    DB.query(SQLSentence, [{amount: amount, category: category, concept: concept, type: type}], (err, row) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Done");
        }
    })
}

const postUser = (req, res) => {
    const {email, password} = req.body;
    const SQLSentence = `INSERT INTO users SET ?`
    
    const powerword = bcrypt.hashSync(password, 10);

    DB.query(SQLSentence, [{email: email, password: powerword}], (err, row) => {
        if (err) {
            console.log(err);
        } else {

        }
    })
}

const postLogin = (req,res) => {
    const {email} = req.body;
    
    const SQLsentence = 'SELECT * FROM users WHERE email = ' + JSON.stringify(email);

    DB.query(SQLsentence, (err, row) => {
        if (err) {
            console.log(err)
        } else {
            const firmJWT = {
                email: row[0].email
            };
            const authorized = jwt.sign(firmJWT, process.env.PASSWORD);
            
            res.json({authorized})
        }
    })
}

// PUT 

const putOperation = (req, res) => {
    const {amount, category, concept, id} = req.body;
    const SQLSentence = `UPDATE operations SET amount = ${JSON.stringify(amount)}, category = ${JSON.stringify(category)}, concept = ${JSON.stringify(concept)} WHERE operation_id = ${JSON.stringify(id)}`

    DB.query(SQLSentence, (err, row) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Operation edited");
        }
    })
}

// DELETE

const deleteOperation = (req, res) => {
    const {id} = req.body;
    const SQLSentence = `DELETE FROM operations WHERE operation_id = ${JSON.stringify(id)}`;

    DB.query(SQLSentence, (err, row) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Done");
        }
    })
}

module.exports = {
    getIndexURL,
    postOperation,
    getOperationsDefault, getAllOperations, postOperationSearchDate, postOperationSearchCategory,
    putOperation,
    deleteOperation,
    postUser, postLogin
}