export default function cleanSet(set, startString) {
  if (!startString) return '';

  const strArr = [];

  set.forEach((str) => {
    if (str.startsWith(startString)) {
      strArr.push(str.slice(startString.length));
    }
  });

  return strArr.join('-');
}
