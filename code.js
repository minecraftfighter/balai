function fun1() {
  szr = document.getElementById("szr").value;
  alert(szr);
  jump = document.getElementById("jump").style.visibility = "visible";
}

function save() {
  szr = document.getElementById("szr").value;
  localStorage.setItem("csaniagamer", szr);
}

function show() {
  szr2 = localStorage.getItem("csaniagamer");
  alert(szr2);
}
