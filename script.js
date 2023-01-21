const valorSlider = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    valorSlider.textContent = value;
    valorSlider.style.left =(value*9.5) + "%";
    valorSlider.classList.add("show");
});

inputSlider.onblur = (()=>{
    valorSlider.classList.remove("show");
})