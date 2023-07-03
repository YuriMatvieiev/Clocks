const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const timeElement = document.getElementsByClassName("digital-clock__time")[0];
const amElement = document.getElementsByClassName("digital-clock__am-dot")[0];
const pmElement = document.getElementsByClassName("digital-clock__pm-dot")[0];
const dayElement = document.getElementsByClassName("digital-clock__day")[0];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12 + ss / 3600}deg)`;
  mn.style.transform = `rotateZ(${mm + ss / 60}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  const timeText = getTime();
  if (timeElement.textContent !== timeText) {
    timeElement.textContent = timeText;
  }
}, 1000);

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const timeText = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;

  if (hour < 12) {
    amElement.style.background = "#dd1b1b";
    pmElement.style.background = "#5d5f5f";
  } else {
    pmElement.style.background = "#dd1b1b";
    amElement.style.background = "#5d5f5f";
  }

  return timeText;
}

timeElement.textContent = getTime();

setInterval(() => {
  timeElement.textContent = getTime();
}, 60000);

const date = new Date();
const dayOfWeek = date.getDay();
const dayOfMonth = date.getDate();
const month = date.toLocaleString("default", { month: "short" });

dayElement.textContent = `${month}, ${getDayOfWeekText(
  dayOfWeek
)} ${dayOfMonth}`;

function getDayOfWeekText(day) {
  return daysOfWeek[day];
}
