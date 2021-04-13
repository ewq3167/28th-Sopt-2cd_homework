const date = document.querySelector(".date");
const digitalTime = document.querySelector(".degitalTime");
const digitalButton = document.querySelector("");

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
  const month = now.getMonth();
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // AM or 24hr

  return { year, month, day, hour, minute, second };
};

const printTime = () => {
  const { year, month, day, hour, minute, second } = getTime(); // 겟 타임을 사용해서 콘스트에

  date.innerHTML = `today is ${monthList[month]} ${day} ${year}`;
  digitalTime.innerHTML = `${hour} : ${minute} : ${second}`;
};

setInterval(printTime, 1000);
