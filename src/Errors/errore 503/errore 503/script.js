const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

themeButton.addEventListener("click", function () {

    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {

    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");

} else {

    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");

}

});