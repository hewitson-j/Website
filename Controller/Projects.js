// const accordion = document.querySelector(".accordion-container");

// accordion.addEventListener("click", (event) => {
//   const clickedElement = event.target;

//   if ([...clickedElement.classList].includes("accordion-head")) {
//     clickedElement.nextElementSibling;

//     sibling.classList.toggle("accordion-body-open");
//   }
// });

// const accordion = document.getElementsByClassName("accordion-head");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }
// const head = document.getElementsByClassName("accordion-header");
// const body = document.getElementsByClassName("accordion-body");

const accordion = document.getElementsByClassName("label");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
