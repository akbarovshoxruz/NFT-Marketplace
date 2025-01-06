const oclok = document.querySelector(".oclok");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function clock() {
    oclok.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    const o =
        new Date().getHours < 10
        ? "0" + new Date().getHours() 
        : new Date().getHours();
    const m =
        new Date().getMinutes < 10
        ? "0" + new Date().getMinutes() 
        : new Date().getMinutes();
    const s =
        new Date().getSeconds < 10
        ? "0" + new Date().getSeconds() 
        : new Date().getSeconds();
    oclok.innerHTML = o;
    minute.innerHTML = m;
    second.innerHTML = s;
}

setInterval(clock, 1000);