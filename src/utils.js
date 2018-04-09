const MS_PER_DAY = 86400000;

function humanizeDate(date) {
  let currentDate = new Date();
  let priorDate = new Date(date);
  let diffInDays = Math.floor(Math.abs((currentDate - priorDate) / MS_PER_DAY));

  return (diffInDays > 14) ? 'on ' + priorDate.toDateString().substr(4,6) : diffInDays + ' days ago';
}

export default humanizeDate;