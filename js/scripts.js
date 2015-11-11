document.addEventListener("DOMContentLoaded", function() {
  var link = document.querySelector(".btn-open-form");
  var form = document.querySelector(".window-form");
  var arrival = form.querySelector("[name=date-arrival]");
  var departure = form.querySelector("[name=date-departure]")

  form.classList.remove("no-js");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("window-form-open");
    form.classList.add("window-form-slide");
    arrival.focus();
  });

  form.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value) {
       event.preventDefault();
       console.log("Выберите интересующие Вас даты");
       form.classList.add("window-form-error");
       setTimeout(function() {
         form.classList.remove("window-form-slide")
         form.classList.remove("window-form-error");
       }, 1000);
       }
  });

});
