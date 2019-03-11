var link = document.querySelector(".find-button");
var popup = document.querySelector(".searching-form");
var arrival = popup.querySelector("#searching-arrival");
var depature = popup.querySelector("#searching-depature");
var adult = popup.querySelector("#searching-adult");
var children = popup.querySelector("#searching-children");
var isStorage = true;
var storage = "";
try{
  storage = localStorage.getItem ("arrival");
}catch(err){
  isStorage = false;
}
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("searching-show");
  arrival.focus();
});
popup.addEventListener("submit", function(evt) {
  if(!arrival.value || !depature.value || !adult.value || !children.value){
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
}
else{
  if(isStorage = true){
  localStorage.setItem("arrival", arrival.value);
  localStorage.setItem("depature", depature.value);
  localStorage.setItem("adult", adult.value);
  localStorage.setItem("children", children.value);
}
}
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("searching-show")) {
        popup.classList.remove("searching-show");
          popup.classList.remove("modal-error");
      }
    }
  });
