const number = document.querySelectorAll(".rasm3-number")

number.forEach(numbers => {
    let a = 0;
    const getIterval = setInterval(() => {
        a++;
        numbers.textContent = a + "+";
    }, 40);

    setTimeout(() => {
        clearInterval(getIterval);
    }, 41200)
});



const oclok = document.querySelector(".oclok");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function date() {
    oclok.innerHTML = 0;
    minute.innerHTML = 0;
    second.innerHTML = 0;
    const o = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    const m = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();  // Corrected here
    const s = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();  
    oclok.innerHTML = o;
    minute.innerHTML = m;
    second.innerHTML = s;

}
setInterval(date, 1000);