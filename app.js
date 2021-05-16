console.log("App.js CONNECTED")

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})
