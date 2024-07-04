
const setHours = document.querySelector("#hours");
const setMinutes = document.querySelector("#minutes");
const setSeconds = document.querySelector("#seconds");
const setAmPm = document.querySelector("#am-pm");
const setAlarmButton = document.querySelector("#set_alarm");
const time = document.querySelector("#time");

window.addEventListener("DOMContentLoaded", () => {

    dropDownMenu(1, 12, setHours);

    dropDownMenu(0, 59, setMinutes);

    dropDownMenu(0, 59, setSeconds);

    setInterval(fetch_time, 1000);
});

function dropDownMenu(start, end, element) {
    for (let i = start; i <= end; i++) {
        const dropDown = document.createElement("option");
        val = i.toString().padStart(2, '0');
        dropDown.value = val;
        dropDown.innerHTML = val;
        element.appendChild(dropDown);
    }
}

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