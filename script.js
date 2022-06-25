const screen = document.getElementById("screen")
const button = document.getElementById("button")
const head = document.getElementById("head")


function randomColor () {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)})`

    return color
}

button.addEventListener("click", ()=> {
    screen.style.background = randomColor()
    head.textContent = `COLOR: ${randomColor()}`
})
