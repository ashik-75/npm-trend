export const formatPrice = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;
