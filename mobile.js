window.addEventListener("load", function () {
  // Only show alert on index.html
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.includes("gretawebsite/");

  if (isHomePage) {
    alert("Even the smallest person can change the course of the future. – Galadriel");
  }

  // Sample mobile nav logic (optional, keep only if you're using a responsive menu)
  const getNavi = document.getElementById("navigation");
  if (getNavi) {
    const mobile = document.createElement("span");
    mobile.setAttribute("id", "mobile-navigation");
    getNavi.parentNode.insertBefore(mobile, getNavi);

    mobile.onclick = function () {
      const current = getNavi.style.display;
      if (current === "block") {
        getNavi.removeAttribute("style");
        mobile.style.backgroundImage = "url(images/mobile-menu.png)";
      } else {
        getNavi.style.display = "block";
        mobile.style.backgroundImage = "url(images/mobile-close.png)";
      }
    };
  }
});
