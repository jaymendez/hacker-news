import { format } from "date-fns";

export const DD_MM_YYYY = "dd.MM.yyyy";

export const formatDate = (
  date: Date | number | undefined | null,
  dateFormat = DD_MM_YYYY
) => {
  if (date) {
    return format(date, dateFormat);
  } else return "";
};
