szr = document.getElementById("szr");

function fun1() {
  alert(szr);
}

function save() {
  localStorage.setItem("csaniagamer", szr);
}

function show() {
  szr2 = localStorage.getItem("csaniagamer");
  alert(szr2);
}
