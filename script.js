function scrollBackground(id, xVel, yVel) {
    const element = document.getElementById(id);
    let posx = 0
    let posy = 0

    function animateBG() {
        posx += xVel;
        posy += yVel;
        element.style.backgroundPosition = `${posx} ${posy}`;
        requestAnimationFrame(animateBG())
    }
    animateBG()
}