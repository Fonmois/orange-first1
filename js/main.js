const nav = document.getElementById('nav');
const navBtn = document.getElementById('navBtn');
const title = document.getElementById('title');

navBtn.addEventListener("click", () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        nav.classList.remove('d-none');
        title.classList.remove('d-enable');
    }
    else {
        nav.classList.add('d-none');
        title.classList.add('d-enable');
    }
})
