import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const formatDate = (date, format) =>
  date === 'now'
    ? dayjs().format(format || 'DD MMM YYYY')
    : dayjs(date).format(format || 'DD MMM YYYY');

const getDateFromNow = date => dayjs(date).fromNow();

const getLastMonthDate = () => dayjs().subtract(1, 'month').format('MM YYYY');

const getTimestamp = date => dayjs(date).valueOf();

const getMonth = date => dayjs(date).month();

export { formatDate, getDateFromNow, getLastMonthDate, getMonth, getTimestamp };
