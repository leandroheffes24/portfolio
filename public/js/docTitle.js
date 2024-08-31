let docTitle = document.title
window.addEventListener("blur", () => {
    document.title = "Vuelve ☺"
})
window.addEventListener("focus", () => {
    document.title = docTitle
})