const mobileNav = document.getElementsByClassName('mobile--nav')[0];
const mobileUL = document.getElementsByClassName('mobile--ul')[0];

mobileNav.addEventListener('click', () => {
    let cross = mobileNav.getElementsByTagName('span')[0];

    mobileUL.classList.toggle('hidden');

    cross.classList.toggle('cross');
})