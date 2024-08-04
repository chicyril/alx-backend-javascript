export default function hasValuesFromArray(set, array) {
  // return new Set(array).isSubsetOf(set);
  return array.every((element) => set.has(element));
}
