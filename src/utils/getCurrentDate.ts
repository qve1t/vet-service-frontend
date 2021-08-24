export const getCurrentDay = (): number => new Date().getUTCDate();

export const getCurrentMonth = (): number => new Date().getUTCMonth();

export const getCurrentYear = (): number => new Date().getUTCFullYear();

export const getDayBeginning = (date: Date): Date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    0,
    0,
    0,
  );
};

export const getDayEnd = (date: Date): Date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    23,
    59,
    59,
  );
};

export const getCurrentDayBeginning = (): Date => {
  const currentDate = new Date();
  return getDayBeginning(currentDate);
};

export const getCurrentDayEnd = (): Date => {
  const currentDate = new Date();
  return getDayEnd(currentDate);
};
