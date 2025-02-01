const noButton = document.getElementById("noButton");
const btnContainer = document.querySelector(".button-container");
const yesBtn = document.getElementById("yesBtn")
const text = document.querySelector("h2")

noButton.style.left = "100px";
noButton.style.top = "0px";

noButton.addEventListener("mouseover", () => {
    let maxX = btnContainer.clientWidth - noButton.offsetWidth - 20;
    let maxY = btnContainer.clientHeight - noButton.offsetHeight - 20;
    let randomX = Math.max(10, Math.min(Math.random() * maxX, maxX));
    let randomY = Math.max(10, Math.min(Math.random() * maxY, maxY));
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.innerText = "Debilo!"
});

document.addEventListener("mousemove", (e) => {
    let cursor = document.querySelector(".heart-cursor");

    if (!cursor) {
        cursor = document.createElement("div");
        cursor.classList.add("heart-cursor");
        cursor.innerHTML = "❤️";
        document.body.appendChild(cursor);
    }

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


yesBtn.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url('cc.jpg')";
    document.body.style.backgroundPosition = "70% ";
    yesBtn.style.display = "none";
    noButton.style.display = "none";
    text.innerHTML = "Ohh you thought you had a choice?! </br> You ARE MY Valentine!"

})