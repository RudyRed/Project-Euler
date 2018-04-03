// Problem 19
// ==========
//
// You are given the following information, but you may prefer to do some
// research for yourself.
//
//   * 1 Jan 1900 was a Monday.
//   * Thirty days has September,
//     April, June and November.
//     All the rest have thirty-one,
//     Saving February alone,
//     Which has twenty-eight, rain or shine.
//     And on leap years, twenty-nine.
//   * A leap year occurs on any year evenly divisible by 4, but not on a
//     century unless it is divisible by 400.
//
// How many Sundays fell on the first of the month during the twentieth
// century (1 Jan 1901 to 31 Dec 2000)?

const monthHas30Days = function (month) {
  if (month === 4) return true;
  if (month === 6) return true;
  if (month === 9) return true;
  if (month === 11) return true;

  return false;
};

const leapYear = function (year) {

  if (year % 100 === 0) { // century

    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }

  }

  if (year % 4) return false;

  return true;
}

const sundaysFirstOfMonth = function () {
  let weekday = 1; // 1 is Monday 7 is Sunday
  let day = 1;
  let month = 1; // 1 is Jan 12 is Dec
  let year = 1900;
  let sundays = 0;

  while (day != 31 || month != 12 || year != 2000) {
    if (month === 12 && day === 31) year++;

    if (day === 31) {
      month++;
      day = 1;
    } else if (day === 30 && monthHas30Days(month)) {
      month++;
      day = 1;
    } else if (month === 2 && day === 29) {
      month++;
      day = 1;
    } else if (month === 2 && day === 28) {

      if (leapYear(year)) {
        day++;
      } else {
        month++;
        day = 1;
      }

    } else {
      day++;
    }

    if (month === 13) month = 1;

    weekday++;
    if (weekday === 8) weekday = 1;


    if (weekday === 7 && day === 1 && year >= 1901) sundays++;
  }

  return sundays;
};


return sundaysFirstOfMonth();
