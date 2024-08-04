export default function groceriesList() {
  // const names = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  // const quantity = [10, 10, 1, 1, 5];
  // const groceries = new Map();
  // names.forEach((name, index) => groceries.set(name, quantity[index]));

  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  return groceries;
}
