const deg = 6;
const hr = document.("#hr");
const sc = document.("#sc")


setInterval(() => {
    let day = new Date();
    let hr = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let sc = day.getSeconds() * deg;

    hr.style.transform = "rotateZ(S{(hr) + (mn/12)}deg)";
    mn.style.transform = "rotateZ(S{mn}deg)";
    sc.style.transform = "rotateZ(S{sc}deg)";

})