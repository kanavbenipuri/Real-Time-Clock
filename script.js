

setInterval(() => {
let date = new Date();
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
console.log(time)
let element = document.getElementById("time")
element.innerHTML = time;
}, 1000)
