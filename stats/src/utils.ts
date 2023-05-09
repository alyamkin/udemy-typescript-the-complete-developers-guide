export const dateStringToDate = (date: string): Date => {
  const [day, month, year] = date
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(year, month - 1, day);
};
