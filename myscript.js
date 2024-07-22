const button = document.querySelectorAll("button");
//.foreach is used to reference all buttons.
button.forEach((button) => {
    button.addEventListener("click", () => {
        button.innerHTML = "EXPERIENCE IS SIMPLY THE NAME WE GIVE OUR MISTAKES.";
        button.style.backgroundColor = "green";
        button.style.color = "white";
        
    });
});

const input = document.querySelector("input");
input.addEventListener("click", () => {
    input.innerHTML = "If a rose smells better<br>than tomatoes...";
    input.style.backgroundColor = "yellow";
    input.style.color = "red";

});

//const test.getElementById("test");
//test.addEventListener("click", () => {
    //test.innerHTML = "Truth can only be found in coding.";
    //test.style.backgroundColor = "black";
    //test.style.color = "white";
//});