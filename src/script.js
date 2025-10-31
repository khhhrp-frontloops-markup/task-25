document.addEventListener("DOMContentLoaded", (event) => {
  const monthGraphItems = document.querySelectorAll(".month-graph__item");

  monthGraphItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log("1");

      item.classList.toggle("month-graph__item--active");

      monthGraphItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("month-graph__item--active");
        }
      });
    });
  });

  const Jun = {
    g: 20,
    b: 10,
    o: 60,
  };

  const Jul = {
    g: 60,
    b: 20,
    o: 10,
  };
});
