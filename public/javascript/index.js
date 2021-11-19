//const { parse } = require("dotenv");

const doubleConsole = document.getElementsByClassName('folder'); // Console 1 and 2
const logger = document.getElementsByClassName('folder--logger')[0];
const containerNav = document.getElementsByClassName('container--nav')[0];

const register = document.getElementsByClassName('register--scroll')[0]

const ulList = document.getElementsByTagName('ul')[0];


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

// UL - configurate Nav Buttons array

function ulEventListener() {
    let home = ulList.getElementsByTagName('li')[0];
    let month = ulList.getElementsByTagName('li')[1];
    let newUser = ulList.getElementsByTagName('li')[2];
    let category = ulList.getElementsByTagName('li')[3];
    let logOut = ulList.getElementsByTagName('li')[4];
    let logIn = document.getElementById('log-in')

    home.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        let labelDay = register_header.getElementsByTagName('label')[1];
        let labelMonth = register_header.getElementsByTagName('label')[2];
        let labelYear = register_header.getElementsByTagName('label')[3];

        let selectDay = register_header.getElementsByTagName('select')[1];
        let selectMonth = register_header.getElementsByTagName('select')[2];
        let selectYear = register_header.getElementsByTagName('select')[3];

        labelDay.classList.add('hidden');
        labelMonth.classList.add('hidden');
        labelYear.classList.add('hidden');
        selectDay.classList.add('hidden');
        selectMonth.classList.add('hidden');
        selectYear.classList.add('hidden');
        labelCat.classList.add('hidden');
        selectCat.classList.add('hidden');

        home.setAttribute('id', 'activeLi');

        clearRegister();
        setTimeout(() => {
            defaultAxion();
        }, 1000);
    })

    month.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        let labelDay = register_header.getElementsByTagName('label')[1];
        let labelMonth = register_header.getElementsByTagName('label')[2];
        let labelYear = register_header.getElementsByTagName('label')[3];

        let selectDay = register_header.getElementsByTagName('select')[1];
        let selectMonth = register_header.getElementsByTagName('select')[2];
        let selectYear = register_header.getElementsByTagName('select')[3];

        labelCat.classList.add('hidden');
        selectCat.classList.add('hidden');

        labelDay.classList.remove('hidden');
        labelMonth.classList.remove('hidden');
        labelYear.classList.remove('hidden');
        selectDay.classList.remove('hidden');
        selectMonth.classList.remove('hidden');
        selectYear.classList.remove('hidden');

        clearRegister();
        setTimeout(() => {
            timeAxion();
        }, 1000);
    })

    category.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        let labelDay = register_header.getElementsByTagName('label')[1];
        let labelMonth = register_header.getElementsByTagName('label')[2];
        let labelYear = register_header.getElementsByTagName('label')[3];

        let selectDay = register_header.getElementsByTagName('select')[1];
        let selectMonth = register_header.getElementsByTagName('select')[2];
        let selectYear = register_header.getElementsByTagName('select')[3];

        labelCat.classList.remove('hidden');
        selectCat.classList.remove('hidden');

        labelDay.classList.add('hidden');
        labelMonth.classList.add('hidden');
        labelYear.classList.add('hidden');
        selectDay.classList.add('hidden');
        selectMonth.classList.add('hidden');
        selectYear.classList.add('hidden');

        clearRegister();
        setTimeout(() => {
            categoryAxion();
        }, 1000);
    })

    newUser.addEventListener('click', () => {
        logger.classList.remove('hidden');
        doubleConsole[0].classList.add('hidden');
        doubleConsole[1].classList.add('hidden');
        btnConfirmUser.classList.remove('hidden');

        let emailValue = loggerForm.getElementsByTagName('input')[0];
        let REemailValue = loggerForm.getElementsByTagName('input')[1];
        let passwordValue = loggerForm.getElementsByTagName('input')[2];
        let REpasswordValue = loggerForm.getElementsByTagName('input')[3];

        let emailLabel = loggerForm.getElementsByTagName('label')[0];
        let REemailLabel = loggerForm.getElementsByTagName('label')[1];
        let passwordLabel = loggerForm.getElementsByTagName('label')[2];
        let REpasswordLabel = loggerForm.getElementsByTagName('label')[3];

        emailValue.classList.remove('hidden');
        REemailValue.classList.remove('hidden');
        passwordValue.classList.remove('hidden');
        REpasswordValue.classList.remove('hidden');

        emailLabel.classList.remove('hidden');
        REemailLabel.classList.remove('hidden');
        passwordLabel.classList.remove('hidden');
        REpasswordLabel.classList.remove('hidden');
    })

    logIn.addEventListener('click', () => {
        let emailValue = loggerForm.getElementsByTagName('input')[0].value;
        let passwordValue = loggerForm.getElementsByTagName('input')[2].value;

        if (!validateEmail(emailValue)) {
            alert("The Email appears to be invalid.");
            return;
        }
        axios({
            method: 'POST',
            url: URLLoginUser,
            data: {
                email: emailValue,
                password: passwordValue
            }
        }).then(res => {
            localStorage.setItem('token', `Bearer ${res.data.authorized}`);

        containerNav.classList.remove('no-log');
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        let labelDay = register_header.getElementsByTagName('label')[1];
        let labelMonth = register_header.getElementsByTagName('label')[2];
        let labelYear = register_header.getElementsByTagName('label')[3];

        let selectDay = register_header.getElementsByTagName('select')[1];
        let selectMonth = register_header.getElementsByTagName('select')[2];
        let selectYear = register_header.getElementsByTagName('select')[3];

        labelDay.classList.add('hidden');
        labelMonth.classList.add('hidden');
        labelYear.classList.add('hidden');
        selectDay.classList.add('hidden');
        selectMonth.classList.add('hidden');
        selectYear.classList.add('hidden');
        labelCat.classList.add('hidden');
        selectCat.classList.add('hidden');

        clearRegister();
        setTimeout(() => {
            defaultAxion();
            totalSum();
        }, 1000);
        }).catch (err => {
            console.log(err);
        })
    })

    logOut.addEventListener('click', () => {
        containerNav.classList.add('no-log');
        logger.classList.remove('hidden');
        doubleConsole[0].classList.add('hidden');
        doubleConsole[1].classList.add('hidden');
        btnConfirmUser.classList.add('hidden');

        let emailValue = loggerForm.getElementsByTagName('input')[0];
        let REemailValue = loggerForm.getElementsByTagName('input')[1];
        let passwordValue = loggerForm.getElementsByTagName('input')[2];
        let REpasswordValue = loggerForm.getElementsByTagName('input')[3];

        let emailLabel = loggerForm.getElementsByTagName('label')[0];
        let REemailLabel = loggerForm.getElementsByTagName('label')[1];
        let passwordLabel = loggerForm.getElementsByTagName('label')[2];
        let REpasswordLabel = loggerForm.getElementsByTagName('label')[3];

        emailValue.classList.remove('hidden');
        REemailValue.classList.add('hidden');
        passwordValue.classList.remove('hidden');
        REpasswordValue.classList.add('hidden');

        emailLabel.classList.remove('hidden');
        REemailLabel.classList.add('hidden');
        passwordLabel.classList.remove('hidden');
        REpasswordLabel.classList.add('hidden');

        localStorage.setItem('token', ``);
    })
}

// Functions for Register

function buildRegister(data) {
    for (let index = 0; index < data.length; index++) {
        let folder = document.createElement('div')
        folder.classList.add('table--folder')

        let operation = document.createElement('table--operation');
        operation.classList.add('table--operation');
        operation.setAttribute('id', data[index].operation_id)

        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        addYeartoSelector(data[index].time.split('T')[0].split('-')[0]);
        p1.innerText = adjustTime(data[index].time);
        p2.innerText = data[index].concept;

        if (data[index].type == 'INCOME') {
            p3.innerText = "AR$ +"+data[index].amount;
        } else {
            p3.innerText = "AR$ -"+data[index].amount;
        }
        p3.classList.add(data[index].type);

        operation.appendChild(p1);
        operation.appendChild(p2);
        operation.appendChild(p3);

        operation.addEventListener('click' , () => {
            dragOperation(data[index]);
        })
        folder.appendChild(operation);

        register.appendChild(folder);
    }
}

function dragOperation(operation) {
    let headerTitle = document.getElementsByClassName('console--header')[0].getElementsByTagName('p')[0];
    headerTitle.innerText = "EDIT OPERATION ID " + operation.operation_id

    let form = document.getElementsByClassName('console--form')[0];

    let amount_input = form.getElementsByTagName('input')[0];
    amount_input.value = operation.amount;

    let type_input = form.getElementsByTagName('select')[0];
    type_input.classList.add('hidden');

    let type_label = form.getElementsByTagName('label')[1];
    type_label.classList.add('hidden');

    let category_input = form.getElementsByTagName('select')[1];
    category_input.value = operation.category;

    let concept_input = form.getElementsByTagName('input')[1];
    concept_input.value = operation.concept;

    btnDelete.classList.remove('hidden');
}

function adjustTime(time) {
    time = time.split('T')[0]
    return time;
}

function addYeartoSelector(year) {
    let selector = register_header.getElementsByTagName('select')[3];
    let arrayOptions = selector.getElementsByTagName('option');

    while (arrayOptions.length != 0) {
        for (let index = 0; index < arrayOptions.length; index++) {
            if (arrayOptions[index].value == year) {
                return; // EXIT IF YEAR INSIDE SELECT == TO NEW YEAR OF OPERATION
            }
            let newYear = document.createElement('option');
            newYear.innerText = year;
            newYear.value = year;

            selector.appendChild(newYear);
            return;
        }
    }

    if (arrayOptions.length == 0) {
        let newYear = document.createElement('option');
        newYear.innerText = year;
        newYear.value = year;

        selector.appendChild(newYear);
        return;
    }
}

function clearRegister() {
    while (register.hasChildNodes()) {
        register.removeChild(register.firstChild);
    }
}

function totalSum() {
        axios({
            method: 'GET',
            url: URLAllOperations,
            headers: {
                authorization: localStorage.getItem('token')
            },
            
        }).then(res => {
            let sum = 0;
            for (let index = 0; index < res.data.length; index++) {
                
                if (res.data[index].type == 'INCOME') {
                    sum = sum + res.data[index].amount;
                }
                if (res.data[index].type == 'EXPENSES') {
                    sum = sum - res.data[index].amount
                }
            }
            
            register_header.getElementsByTagName('p')[0].innerText = `AR$ ${sum} `;

            if (Math.sign(sum) == 1) {
                let pChangeColor = register_header.getElementsByTagName('p')[0];
                pChangeColor.classList.remove('EXPENSES');
                pChangeColor.classList.remove('NONE');
                pChangeColor.classList.add('INCOME');
            }
            if (Math.sign(sum) != 1) {
                let pChangeColor = register_header.getElementsByTagName('p')[0];
                pChangeColor.classList.remove('INCOME');
                pChangeColor.classList.remove('NONE');
                pChangeColor.classList.add('EXPENSES');
            }
            if (Math.sign(sum) == 0) {
                let pChangeColor = register_header.getElementsByTagName('p')[0];
                pChangeColor.classList.remove('INCOME');
                pChangeColor.classList.remove('EXPENSES');
                pChangeColor.classList.add('NONE');
            }


        }).catch (err => {
            console.log(err);
        })
        
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// REGISTER BUTTONS - ACTIVE FUNCTIONS


categorySelect.addEventListener('change', () => {
    categoryAxion();
})

day.addEventListener('change', () => {
    timeAxion();
})

month.addEventListener('change', () => {
    timeAxion();
})

year.addEventListener('change', () => {
    timeAxion();
})

input_type.addEventListener('change', () => {
    let input_cat_groceries = document.getElementById('input_cat_groceries');
    let input_cat_taxes = document.getElementById('input_cat_taxes');
    let input_cat_management = document.getElementById('input_cat_management');
    let input_cat_other = document.getElementById('input_cat_other');
    let input_cat_travel = document.getElementById('input_cat_travel');
    let input_cat_income = document.getElementById('input_cat_income');
    if (input_type.value == 'INCOME') {

        input_cat_groceries.classList.add('hidden');
        input_cat_taxes.classList.add('hidden');
        input_cat_management.classList.add('hidden');
        input_cat_other.classList.add('hidden');
        input_cat_travel.classList.add('hidden');
        input_cat_income.classList.remove('hidden');

        input_category.value = 'INCOME';
    }
    if (input_type.value == 'EXPENSES') {
        
        input_cat_groceries.classList.remove('hidden');
        input_cat_taxes.classList.remove('hidden');
        input_cat_management.classList.remove('hidden');
        input_cat_other.classList.remove('hidden');
        input_cat_travel.classList.remove('hidden');
        input_cat_income.classList.add('hidden');

        input_category.value = 'GROCERIES';
    }
})

btnConfirm.addEventListener('click', () => {
    let amount = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--form')[0].getElementsByTagName('input')[0].value;
    let type = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--form')[0].getElementsByTagName('select')[0].value;
    let category = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--form')[0].getElementsByTagName('select')[1].value;
    let concept = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--form')[0].getElementsByTagName('input')[1].value;

    if (amount == undefined || amount == '') {
        alert("Warning. No amount detected.")
    }
    assesAxion(amount, type, category, concept);
    clearRegister();
    setTimeout(() => {
        defaultAxion();
    }, 1000);
    totalSum();
})

btnCancel.addEventListener('click', () => {
    let headerTitle = document.getElementsByClassName('console--header')[0].getElementsByTagName('p')[0];
    headerTitle.innerText = "ADD NEW OPERATION"

    let form = document.getElementsByClassName('console--form')[0];

    let amount_input = form.getElementsByTagName('input')[0];
    amount_input.value = '';

    let concept_input = form.getElementsByTagName('input')[1];
    concept_input.value = '';

    let type_input = form.getElementsByTagName('select')[0];
    type_input.classList.remove('hidden');

    let type_label = form.getElementsByTagName('label')[1];
    type_label.classList.remove('hidden');

    btnDelete.classList.add('hidden');
})

btnDelete.addEventListener('click', () => {
    let query = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--header')[0].getElementsByTagName('p')[0].innerText;

    let aux = query.split(' ')[3];

    console.log(aux)
    console.log(query)

    deleteAxion(aux);
})

btnConfirmUser.addEventListener('click', () => {
    let emailValue = loggerForm.getElementsByTagName('input')[0].value;
    let REemailValue = loggerForm.getElementsByTagName('input')[1].value;
    let passwordValue = loggerForm.getElementsByTagName('input')[2].value;
    let REpasswordValue = loggerForm.getElementsByTagName('input')[3].value;

    let query = logger.getElementsByClassName('container-logger')[0].getElementsByClassName('console--header')[0].getElementsByTagName('p')[0].innerText.split(' ')[0]

    if (query == 'ADD') {
        if (emailValue != REemailValue ) {
            alert("Emails are not the same.");
            return;
        }
        if (passwordValue != REpasswordValue) {
            alert("Passwords are not the same.")
            return;
        }
        if (!validateEmail(emailValue)) {
            alert("The Email appears to be invalid.");
            return;
        }
        registerAxion(emailValue, passwordValue);
    } 
    if (query == 'WELCOME') {
        loginAxion(emailValue, passwordValue);
    }

    //registerAxion(emailValue, REemailValue, passwordValue, REpasswordValue );
})

// AXIONS

function assesAxion(amount, type, category, concept) {
    let query = document.getElementsByClassName('container--console')[0].getElementsByClassName('console--header')[0].getElementsByTagName('p')[0].innerText;

    let aux = query.split(' ')[3];
    query = query.split(' ')[0]
    


    if (query == 'ADD') {
        postAxion(amount, type, category, concept);
    }
    if (query == 'EDIT') {
        putAxion(amount, aux, category, concept); 
    }
}
function postAxion(amount, type, category, concept) {
    axios({
        method: 'POST',
        url: URLOperations,
        headers: {
            authorization: localStorage.getItem('token')
        },
        
        data: {
            amount: amount,
            type: type,
            category: category,
            concept: concept
        }
    }).then(res => {
    }).catch (err => {
        console.log(err);
    })
}
function putAxion(amount, id, category, concept) {
    axios({
        method: 'PUT',
        url: URLOperations,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            amount: amount,
            category: category,
            concept: concept,
            id: id
        }
    }).then(res => {
    }).catch (err => {
        console.log(err);
    })
}
function deleteAxion(id) {
    axios({
        method: 'DELETE',
        url: URLOperations,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            id: id
        }
    }).then(res => {
        clearRegister();
        defaultAxion();
        totalSum();
    }).catch (err => {
        console.log(err);
    })
}
function timeAxion() {

    let min_D = 0;
    let max_D = 0;
    let min_M = 0
    let max_M = 0
    let max_Y = year.value
    let min_Y = year.value

    if (day.value == 0) {
        min_D = 31;
        max_D = 1;
        min_M = parseInt(month.value) -1;
        max_M = parseInt(month.value) +1;
    } else {
        min_D = parseInt(day.value) -1;
        max_D = parseInt(day.value) +1;
        min_M = parseInt(month.value);
        max_M = parseInt(month.value);
    }

    if (min_M == 0) {
        min_Y = parseInt(min_Y) -1;
        min_M = 12;
    }

    if (max_M == 13) {
        max_Y = parseInt(max_Y) +1;
        max_M = 1;
    }
    axios({
        method: 'POST',
        url: URLTimeOperations,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            min_D: min_D,
            max_D: max_D,
            min_M: min_M,
            max_M: max_M,
            min_Y: min_Y,
            max_Y: max_Y
        }
    }).then(res => {
        clearRegister();
        buildRegister(res.data);
    }).catch (err => {
        console.log(err);
    })
}
function categoryAxion() {
    axios({
        method: 'POST',
        url: URLCategoryOperations,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            category: categorySelect.value
        }
    }).then(res => {
        clearRegister();
        buildRegister(res.data);
    }).catch (err => {
        console.log(err);
    })
}
function defaultAxion() {
    axios({
        method: 'GET',
        url: URLOperations,
        
        headers: {
            authorization: localStorage.getItem('token')
        },
        
    }).then(res => {
        buildRegister(res.data);
    }).catch (err => {
        console.log(err);
    })
    
}
function registerAxion(email, password) {
    axios({
        method: 'POST',
        url: URLRegisterUser,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            email: email,
            password: password
        }
    }).then(res => {
        alert("User with email " + email + " is now added to the database");
    }).catch (err => {
        console.log(err);
    })
}

// Init Functions

function init() {
    ulEventListener();
}

init();