const firstDates = document.querySelectorAll(".date-form__input_first");
const secondDates = document.querySelectorAll(".date-form__input_second");

firstDates.forEach((firstDate) => {
  firstDate.addEventListener("change", (e) => {
    const selectedDate = new Date(firstDate.value);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const day = new Date(year, month, 0).getDate(); // Получаем последний день месяца

    firstDate.value =
      year +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;

    secondDates.forEach((secondDate) => {
      secondDate.addEventListener("change", (e) => {
        const secondSelectedDate = new Date(secondDate.value);
        const secondYear = secondSelectedDate.getFullYear();

        secondDate.value =
          secondYear +
          "-" +
          (month < 10 ? "0" : "") +
          month +
          "-" +
          (day < 10 ? "0" : "") +
          day;
      });
    });
  });
});
