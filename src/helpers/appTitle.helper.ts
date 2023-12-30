const baseTitle = "Haru App";

export const appTitle = (title?: string): string => {
  return title && title.trim().length !== 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
};
