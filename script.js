

const time = document.querySelector("#time");

window.addEventListener("DOMContentLoaded", () => {

    setInterval(fetch_time, 1000);
});

function fetch_time() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;

    const formattedTime = `${formattedHour.toString().padStart(2, '0')}:${minutes}:${seconds} ${amOrPm}`;

    time.textContent = formattedTime;
}