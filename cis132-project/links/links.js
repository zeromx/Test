function link(url) {
  window.location = url;
}

function verify() {
  var valid = true;
  var regExp = /^[\w]+$/;
  document.getElementById("wordError").style.visibility = "hidden";
  if (!regExp.test(document.getElementById("word").value)) {
    valid = false;
    document.getElementById("wordError").style.visibility = "visible";
  }
  return valid;
}