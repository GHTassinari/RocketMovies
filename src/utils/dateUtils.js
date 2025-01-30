export const processDate = (dateString) => {
  const date = new Date(dateString);

  return {
    time: {
      hour: String(date.getHours()).padStart(2, "0"),
      minute: String(date.getMinutes()).padStart(2, "0"),
      second: String(date.getSeconds()).padStart(2, "0"),
    },
    day: String(date.getDate()).padStart(2, "0"),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    year: date.getFullYear(),
  };
};
