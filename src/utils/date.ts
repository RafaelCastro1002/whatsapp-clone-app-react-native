import { isToday, format } from "date-fns";

export const getFormattedDateOrTimeToMessage = (date: Date) => {
  const dateIsToday = isToday(date);

  if (dateIsToday) {
    return format(date, "HH:mm");
  } else {
    return format(date, "dd/MM/yyyy");
  }
};
