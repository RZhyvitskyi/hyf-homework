const myArgs = process.argv.slice(2);
const numbers = myArgs
  .filter((number) => (number.match(/\d/) ? number : false))
  .map((number) => +number);

if (numbers.length === 0) {
  console.log('No numbers provided');
} else {
  const avgNumber =
    numbers.reduce((sum, prev) => sum + prev, 0) / numbers.length;
  console.log('avgNumber: ', avgNumber);
}
