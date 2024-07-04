
const setHours = document.querySelector("#hours");
const setMinutes = document.querySelector("#minutes");
const setSeconds = document.querySelector("#seconds");
const setAmPm = document.querySelector("#am-pm");
const setAlarmButton = document.querySelector("#set_alarm");
const time = document.querySelector("#time");
const all_alarm_el = document.querySelector(".all-alarms");

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

setAlarmButton.addEventListener("click", getInput);

function getInput() {
    const h = setHours.value;
    const m = setMinutes.value;
    const s = setSeconds.value;
    const zone = setAmPm.value;
    const time = h + ":" + m + ":" + s + " " + zone;

    const alarm_el = document.createElement("div");
    alarm_el.classList.add("alarm");

    const p_el = document.createElement("p");
    p_el.textContent = time;

    const i_el = document.createElement("i");
    i_el.classList.add("fa-solid", "fa-trash");

    alarm_el.append(p_el, i_el);
    all_alarm_el.append(alarm_el);

    i_el.addEventListener("click", (e) => {
        console.log(e.target)
        ring_remove_alarm(time, "btn");
    })
}

function ring_remove_alarm(time, remove_type) {

    const alarmElements = document.querySelectorAll('.alarm p');

    alarmElements.forEach((element) => {
        if (element.textContent === time) {
            // Remove the alarm element from its parent
            element.parentElement.remove(); p
            if (remove_type === "ring") {
                alert("alarm ringing");
            } p
        }
    });
}