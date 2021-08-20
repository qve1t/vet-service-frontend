export const getCurrentDay = (): number => new Date().getUTCDate();

export const getCurrentMonth = (): number => new Date().getUTCMonth();

export const getCurrentYear = (): number => new Date().getUTCFullYear();

export const getCurrentDayBeginning = (): Date => {
  const currentDate = new Date();
  return new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate(),
    0,
    0,
    0,
  );
};

export const getCurrentDayEnd = (): Date => {
  const currentDate = new Date();
  return new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate(),
    23,
    59,
    59,
  );
};
