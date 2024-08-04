export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) return '';
  const arr = [];
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      arr.push(element.slice(startString.length));
    }
  });
  return arr.join('-');
}
