const ul = document.querySelector("ul")
const input = document.querySelector(".main > .input > input")
const enterBtn = document.querySelector(".input > button")
const color = document.querySelectorAll(".color>span")
let data = []

let y = JSON.parse(localStorage.getItem("toDoList"))

if (y != null) {
    y.forEach((e) => {
        ul.appendChild(createLi(e[0], e[1]))
    })
}

color.forEach((element) => {
    element.addEventListener("click", () => {
        let style = element.getAttribute("data-color")
        input.style.backgroundColor = style
    })
})

enterBtn.addEventListener("click", (e) => {
    (input.value != "") ? ul.appendChild(createLi(input.value, input.style.backgroundColor)): alert("Please fill the input")
    input.value = ""
})

function deletLi(e) {
    console.log("ssssssss");
    e.parentElement.parentElement.remove()
}



function createLi(i, color) {
    let li = document.createElement("li")
    li.style.backgroundColor = color
    li.innerHTML = `  
                <div>

                    <p>${i}</p>
                    <input type="text" style='background-color:transparent
                    ;border:1px solid gray;display:none' >

                </div>

                <div>

                    <span onclick='deletLi(this)'><i class="bi bi-trash" ></i></span>
                
                    </div>
                `
    data.push([i, li.style.backgroundColor])
    localStorage.setItem("toDoList", JSON.stringify(data))
    return li

}