export const isLastDayOfMonth = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const nextMonth = new Date(currentYear, currentMonth + 1, 1);
  const lastDay = new Date(nextMonth - 1).getDate();

  return currentDate === lastDay;
};
