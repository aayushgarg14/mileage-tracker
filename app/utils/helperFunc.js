import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const formatDayjs = (date, format) =>
  dayjs(date).format(format || 'DD MMM YYYY');

const fromNowDayjs = date => dayjs(date).fromNow();

const getLastMonthDate = () => dayjs().subtract(1, 'month').format('MM YYYY');

const formatDate = date => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
};

const formatTime = date => {
  return new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

export { formatDayjs, fromNowDayjs, formatDate, formatTime, getLastMonthDate };
