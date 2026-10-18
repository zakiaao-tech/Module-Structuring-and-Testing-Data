export function getOrdinalNumber(num) {
  if (num % 10 === 1) {
    return `${num}st`;
  }
  return "1st";
}
