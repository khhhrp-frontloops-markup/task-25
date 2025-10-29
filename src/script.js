document.addEventListener("DOMContentLoaded", (event) => {
  const infoItems = document.querySelectorAll(".info__item");

  infoItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      item.classList.toggle("info__item--active");

      infoItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("info__item--active");
        }
      });
    });
  });
});
