export default {
  addCommas,
}

function addCommas(number: number): string {
  const numberFormatter = new Intl.NumberFormat();

  return numberFormatter.format(number);
}
