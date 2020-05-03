var akanMale = ["kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function results() {
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var date = new Date(year + "/" + month + "/" + day);
  var gender = print();
  var day2 = date.getDay();
  var akan;

  if (day < 1 || day > 31) {
    alert("Enter valid day");
    return false;
  } else if (month < 1 || month > 12 || (month == 2 && day > 29)) {
    alert("Enter valid day");
    return false;
  } else if (year < 1900 || year > 2030) {
    alert("Enter valid year");
    return false;
  }

  if (gender === "male") {
    akan = akanMale[day2];
  } else {
    akan = akanFemale[day2];
  }
  alert(
    "You were born on   " +
      dayOfTheWeek[day2] +
      "  and your akan name is " +
      akan
  );
  document.getElementById("akan").innerHTML =
    "You were born on   " +
    dayOfTheWeek[day2] +
    "  and your akan name is " +
    akan;
}
function print() {
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
}
function myFunction() {
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("day").value = "";
  document.getElementById("gender").value = "";
}
