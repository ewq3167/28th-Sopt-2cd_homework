const date = document.querySelector(".date");
const digitalTime = document.querySelector(".digitalTime");
const digitalButton = document.querySelector(".digitalButton");
const analogHour = document.querySelector(".analog_hour"),
  analogMinute = document.querySelector(".analog_minute"),
  analogSecond = document.querySelector(".analog_second");

let hour24 = false;

const changeTime = () => {
  if (hour24) {
    hour24 = false;
  } else {
    hour24 = true;
    digitalButton.innerHTML = "24h";
  }
};

const fillZero = (num) => {
  num = num + "";
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getTime = () => {
  const now = new Date(); // 내장 객체 date
  const year = now.getFullYear();
  let month = now.getMonth(); //바뀌는 값 let으로
  const day = now.getDate();
  let hour = now.getHours(); //바뀌는 값 let으로
  const minute = now.getMinutes();
  const second = now.getSeconds();

  if (!hour24) {
    if (hour >= 0 && hour <= 11) {
      if (hour === 0) hour = 12;
      digitalButton.innerHTML = "AM";
    } else {
      if (hour >= 13) hour -= 12;
      digitalButton.innerHTML = "PM";
    }
  }

  return { year, month, day, hour, minute, second };
};

const printClock = (hour, minute, second) => {
  const hourDegree = (hour + minute / 60) * (360 / 12) + 90;
  const minuteDegree = (minute + second / 60) * (360 / 60) + 90;
  const secondDegree = second * (360 / 60) + 90;

  analogHour.style.transform = `rotate(${hourDegree}deg)`;
  analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
  analogSecond.style.transform = `rotate(${secondDegree}deg)`;
};

const printTime = () => {
  const { year, month, day, hour, minute, second } = getTime(); // 겟 타임을 사용해서 콘스트에

  date.innerHTML = `today is ${monthList[month]} ${day} ${year}`;
  digitalTime.innerHTML = `${fillZero(hour)} : ${fillZero(minute)} : ${fillZero(
    second
  )}`;

  printClock(hour, minute, second);
};

const init = () => {
  setInterval(printTime, 1000);
  digitalButton.addEventListener("click", changeTime);
};

init();
