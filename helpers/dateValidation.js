function dateValidation(date) {
  const listDate = date.split('/');
  const day = listDate[0];
  const month = listDate[1];
  const year = listDate[2];
  const maybeNaN = (Number(day) + Number(month) + Number(year));
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) return false;
  if (Number.isNaN(maybeNaN)) return false;
  return true;
}

module.exports = dateValidation;