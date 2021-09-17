function getLocalDateWithOffset() {
  let localDateWithOffset = new Date();
  localDateWithOffset = new Date(
    localDateWithOffset - localDateWithOffset.getTimezoneOffset() * 60000
  );
  return localDateWithOffset;
}

const dateOptions = {
  default: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  noWeekDay: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
};

function parseStrDateToLocaleDate(str, options = dateOptions.default) {
  return new Date(str).toLocaleDateString('en-GB', options);
}

export { getLocalDateWithOffset, parseStrDateToLocaleDate, dateOptions };
