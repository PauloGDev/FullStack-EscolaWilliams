export default function FadeAnimate() {
    window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 750;
        let height = sec.offsetHeight;

        if(top >= offSet && top < offSet + height){
            sec.classList.add('show-animate');
        }else {
            
        }
    })
}
}