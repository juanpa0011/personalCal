const { Router } = require('express');
const { getIndexURL, postOperation, getOperationsDefault, getAllOperations, postOperationSearchDate, postOperationSearchCategory, putOperation, deleteOperation, postUser, postLogin } = require('../controllers/api');
const { validateToken } = require('../middlewares/middleware');
//const {} = require('../middleware/middleware');
const router = Router();

router.get('/', getIndexURL);

router.get('/operation', validateToken, getOperationsDefault);
router.get('/operation/all', validateToken, getAllOperations);

// POST - CREATE

router.post('/register', validateToken, postUser);
router.post('/login', postLogin);
router.post('/operation', validateToken, postOperation );

router.post('/operation/time', validateToken, postOperationSearchDate);
router.post('/operation/category', validateToken, postOperationSearchCategory);
// PUT - EDIT

router.put('/operation', validateToken, putOperation);


// DELETE - DELETE

router.delete('/operation', validateToken, deleteOperation)

// DATA HANDLERS

module.exports = router;