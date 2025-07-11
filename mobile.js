// Show alert ONLY on home page
window.addEventListener("load", function () {
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||

  if (isHomePage) {
    alert(
      "Even the smallest person can change the course of the future. – Galadriel"
    );
  }
});
