//Slider range
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

//função para selecionar unico checkbox 
function clickbox(id){
    switch(id){
        case muitoBom:
            window.document.getElementById('bom').checked= false;
            window.document.getElementById('ruim').checked= false;
            window.document.getElementById('muitoRuim').checked= false;
               
            break;
        case bom:
            window.document.getElementById('muitoBom').checked= false;
            window.document.getElementById('ruim').checked= false;
            window.document.getElementById('muitoRuim').checked= false;
            break;
        case ruim:
            window.document.getElementById('muitoBom').checked= false;
            window.document.getElementById('bom').checked= false;
            window.document.getElementById('muitoRuim').checked= false;
            break;
        case muitoRuim:
            window.document.getElementById('muitoBom').checked= false;
            window.document.getElementById('bom').checked= false;
            window.document.getElementById('ruim').checked= false;
            break;
    }
}
