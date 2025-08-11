const dropBtn = document.getElementById("dropdown-alamat");
const dropDownAddress = document.getElementById("input-dropdown");
const inputAddress = document.getElementById("input-address");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeSlider = document.getElementById("cross");
const slider = document.getElementById("slider");
const titleWarung = document.getElementsByClassName("title")[0];
const containerTitleWarung = document.getElementById("title-warung");


if(titleWarung.scrollWidth > containerTitleWarung.clientWidth){
    let title = titleWarung.innerHTML.split(" ");
    titleWarung.innerHTML = `${title[0]} ${title[1]} ........`;    
}

let pressed = true;
dropBtn.addEventListener('click', () => {
    dropBtn.classList.toggle("rotate180");
    dropDownAddress.classList.toggle("drop");
    if(pressed){
        inputAddress.focus();
        inputAddress.value = "";
    }
    if(!pressed){
        inputAddress.blur();
        inputAddress.value = "Jl. Puspitek, Tangerang Selatan";
    }
    pressed = !pressed;
});

inputAddress.addEventListener("focus", () => {inputAddress.value = "";});
inputAddress.addEventListener("blur", () => {inputAddress.value = "Jl. Puspitek, Tangerang Selatan";});
hamburgerMenu.addEventListener("click", () => {
    slider.classList.toggle("slider-slide");
});
closeSlider.addEventListener("click", () => {
    slider.classList.toggle("slider-slide");
});