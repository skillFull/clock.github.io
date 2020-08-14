const clock = document.getElementById('clock');

const watch = setInterval(() => {
    const date = new Date();
    const Miliseconds = date.getMilliseconds();
    const Seconds = date.getSeconds();
    clock.innerHTML = `<div style="border: 2px solid red; width: ${Miliseconds}px; height: ${Miliseconds}px; margin-bottom: 20px; border-radius: 60%"></div>`
}, 10)