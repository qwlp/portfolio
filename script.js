const clock = document.querySelector("#clock");
const year = document.querySelector("#year");

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Phnom_Penh",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

function updateClock() {
  clock.textContent = timeFormatter.format(new Date());
}

updateClock();
setInterval(updateClock, 1000);
year.textContent = new Date().getFullYear();
