function getLocalDateWithOffset() {
  let localDateWithOffset = new Date();
  localDateWithOffset = new Date(
    localDateWithOffset - localDateWithOffset.getTimezoneOffset() * 60000
  );
  return localDateWithOffset;
}

function parseStrDateToLocaleDate(str) {
  return new Date(str).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export { getLocalDateWithOffset, parseStrDateToLocaleDate };
