function getIsItFriday() {
  let today = new Date();
  let isItFriday = today.getDay() === 5 ? "Ja!" : "Nej";

  document.getElementById("isItFriday").innerHTML = isItFriday;
}
