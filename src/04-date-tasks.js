function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function timeSpanToString(startDate, endDate) {
  const difference = Math.abs(endDate.getTime() - startDate.getTime());

  const hours = Math.floor(difference / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  const milliseconds = difference % 1000;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMilliseconds = String(milliseconds).padStart(3, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();

  const hourAngle = (hours * 60 + minutes) * 0.5;
  const minuteAngle = minutes * 6;

  const difference = Math.abs(hourAngle - minuteAngle);
  const smallerAngle = Math.min(difference, 360 - difference);

  return (smallerAngle * Math.PI) / 180;
}

function getDay(day, isLeap) {
  const year = isLeap ? 2000 : 2001;
  const date = new Date(Date.UTC(year, 0, day));

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${months[date.getUTCMonth()]}, ${date.getUTCDate()}`;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
