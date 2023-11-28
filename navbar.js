/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        unhide();
    } else {
        hide();
    }
    prevScrollpos = currentScrollPos;
}

function hide() {
    document.getElementById("navbar").style.top = "-200px";
}

function unhide() {
    document.getElementById("navbar").style.top = "0";
}
