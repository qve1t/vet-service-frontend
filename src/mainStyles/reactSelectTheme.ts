import { colors } from "./colors";

export const selectTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.themeGreen,
    primary25: colors.themeGreen25,
    primary50: colors.themeGreen50,
    primary75: colors.themeGreen75,
  },
});
