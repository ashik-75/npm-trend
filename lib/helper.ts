export const formatPrice = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export const format = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
