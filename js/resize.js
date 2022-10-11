function resize() {
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  let ratio = null;

  if (width < 1024) {
    ratio = width / 375;
  } else {
    ratio = width / 1024;
  }
  let fontSize = 100 * ratio;
  document.getElementsByTagName("html")[0].style["font-size"] = fontSize + "px";
}
window.addEventListener("onload",resize())

