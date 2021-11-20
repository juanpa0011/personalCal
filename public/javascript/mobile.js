// ACTIVE FUNCTIONS

mobileNav.addEventListener('click', () => {
    let cross = mobileNav.getElementsByTagName('span')[0];

    mobileUL.classList.toggle('hidden');

    cross.classList.toggle('cross');
});

selectDay.addEventListener('change', () => {
    timeAxion(selectYear.value, selectMonth.value, selectDay.value);
})

selectMonth.addEventListener('change', () => {
    timeAxion(selectYear.value, selectMonth.value, selectDay.value);
})

selectYear.addEventListener('change', () => {
    timeAxion(selectYear.value, selectMonth.value, selectDay.value);
})

// FUNCTIONS

function ulEventListenerMobile() {
    let home = mobileUL.getElementsByTagName('li')[0];
    let month = mobileUL.getElementsByTagName('li')[1];
    let newUser = mobileUL.getElementsByTagName('li')[2];
    let category = mobileUL.getElementsByTagName('li')[3];
    let logOut = mobileUL.getElementsByTagName('li')[4];

    home.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        activeLI(home, month, newUser, category)

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        

        monthNav.classList.add('hidden');
        labelCat.classList.add('hidden');
        selectCat.classList.add('hidden');

        clearRegister();
        defaultAxion();
    })

    month.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        activeLI(month, home, newUser, category);

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        labelCat.classList.add('hidden');
        selectCat.classList.add('hidden');

        monthNav.classList.remove('hidden');


        clearRegister();
        setTimeout(() => {
            timeAxion();
        }, 1000);
    })

    category.addEventListener('click', () => {
        logger.classList.add('hidden');
        doubleConsole[0].classList.remove('hidden');
        doubleConsole[1].classList.remove('hidden');

        activeLI(category, home, month, newUser)

        let labelCat = register_header.getElementsByTagName('label')[0];
        let selectCat = register_header.getElementsByTagName('select')[0];

        labelCat.classList.remove('hidden');
        selectCat.classList.remove('hidden');

        monthNav.classList.add('hidden');

        clearRegister();
        setTimeout(() => {
            categoryAxion();
        }, 1000);
    })

    newUser.addEventListener('click', () => {
        logger.classList.remove('hidden');
        doubleConsole[0].classList.add('hidden');
        doubleConsole[1].classList.add('hidden');

        mobileLogIn.innerText = "CONFIRM";
        consoleHeader.innerText = "ADD NEW USER";

        activeLI(newUser, home, month, category)

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

    logOut.addEventListener('click', () => {
        containerNav.classList.add('no-log');
        logger.classList.remove('hidden');
        doubleConsole[0].classList.add('hidden');
        doubleConsole[1].classList.add('hidden');
        btnConfirmUser.classList.add('hidden');

        mobileLogIn.innerText = "LOG IN"
        consoleHeader.innerText = "WELCOME USER"

        mobileLogIn.classList.remove('hidden');
        logOut.classList.toggle('hidden');
        home.classList.toggle('hidden');
        category.classList.toggle('hidden');
        newUser.classList.toggle('hidden');
        month.classList.toggle('hidden');

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

    mobileLogIn.addEventListener('click', () => {

        if (mobileLogIn.innerText == "CONFIRM") {
            registerAxionMobile(logOut, home, category, newUser, month );
        }
        
        if (mobileLogIn.innerText == "LOG IN") {
            logInAxionMobile(logOut, home, category, newUser, month);
        }
        
    })
}

function logInAxionMobile(logOut, home, category, newUser, month) {
    mobileLogIn.classList.toggle('hidden');
        logOut.classList.toggle('hidden');
        home.classList.toggle('hidden');
        category.classList.toggle('hidden');
        newUser.classList.toggle('hidden');
        month.classList.toggle('hidden');
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
}

function registerAxionMobile(logOut, home, category, newUser, month) {
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

}

ulEventListenerMobile();