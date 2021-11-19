const doubleConsole = document.getElementsByClassName('folder'); // Console 1 and 2
const logger = document.getElementsByClassName('folder--logger')[0];
const containerNav = document.getElementsByClassName('container--nav')[0];

const register = document.getElementsByClassName('register--scroll')[0]

const ulList = document.getElementsByTagName('ul')[1];


const btnConfirm = document.getElementById('btn--confirm--op');
const btnConfirmUser = document.getElementById('btn--confirm--user');
const btnCancel = document.getElementById('btn--cancel');
const btnDelete = document.getElementById('btn--delete');

const register_header = document.getElementsByClassName('register--title')[0];

const input_category = document.getElementById('input_category');
const input_type = document.getElementById('input_type');

const day = document.getElementById('day_select');
const month = document.getElementById('month_select');
const year = document.getElementById('year_select'); 

const categorySelect = document.getElementById('category_select');

const loggerForm = document.getElementsByClassName('container-logger')[0].getElementsByClassName('console--form')[0];

// URLs

const URLOperations = 'http://localhost:3000/operation'; 
const URLAllOperations = 'http://localhost:3000/operation/all';
const URLTimeOperations = 'http://localhost:3000/operation/time';
const URLCategoryOperations = 'http://localhost:3000/operation/category';
const URLRegisterUser = 'http://localhost:3000/register';
const URLLoginUser = 'http://localhost:3000/login';