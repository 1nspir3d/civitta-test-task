export const formatCurrency = (
  value: number,
  locale: string,
  options: Intl.NumberFormatOptions
) => {
  const formattedValue = Intl.NumberFormat(locale, options)
    .format(value)
    .toString();
  const sign = formattedValue.charAt(0);
  return { formattedValue, sign };
};
