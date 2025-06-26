function fun1() {
  szr = document.getElementById("szr");
  alert(szr.value);
}

function save() {
  szr = document.getElementById("szr");
  localStorage.setItem("csaniagamer", szr);
}

function show() {
  szr2 = localStorage.getItem("csaniagamer");
  alert(szr2);
}
