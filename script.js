document.addEventListener("DOMContentLoaded", function () {
    console.log("RK Engineers Website Loaded");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            console.log("Menu clicked");
        });
    });
});
