export const filterFormkErrors = <T extends Object>(
  errors: T,
  touched: { [key: string]: boolean },
  values: T
) => {
  const touchedKeys = Object.entries(touched).map(([key, value]) => {
    if (value) return key;
  });

  const finalErrors: string[] = [];

  Object.entries(errors).forEach(([key, value]) => {
    if (touchedKeys.includes(key) && value) return finalErrors.push(value);
  });
  return finalErrors;
};
