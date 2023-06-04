const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#navBtn');
const title = document.querySelector('#title');


navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
          (nav.classList.remove('d-none'), 
          title.classList.remove('d-enable'));
    }
    else {
        (nav.classList.toggle('d-none'),
        title.classList.toggle('d-enable'));
    }
}
// screen.orientation.lock('portrait');
