const nav = document.getElementById('nav'); // для поиска по id лучше использовать getElementById
const navBtn = document.getElementById('navBtn');
const title = document.getElementById('title');


navBtn.addEventListener("click", () => {
    if(nav.classList.contains('open')) {
          nav.classList.remove('d-none'), 
          title.classList.remove('d-enable');
    }
    else {
        nav.classList.add('d-none'),
        title.classList.add('d-enable');
    }

    // ИЛИ ПРОСТО
    // nav.classList.toggle('d-none'),
    // title.classList.toggle('d-enable');
})
// screen.orientation.lock('portrait');
