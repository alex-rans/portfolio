// setTimeout(function () {
//     document.getElementById("loading-div").classList.add("d-none")
//     document.getElementById("about-me").classList.remove("d-none")
//     document.getElementById("info").classList.remove("d-none")
// }, 1000)
AOS.init()
document.getElementById("loading-div").classList.add("d-none")
document.getElementById("about-me").classList.remove("d-none")
document.getElementById("portfolio").classList.remove("d-none")

const element = document.querySelector(".portfolio-container img");

element.addEventListener("mousemove", (e) => {
    const offsetX = (e.clientX / (screen.width / 2) - 1) * 2.5
    const offsetY = (e.clientY / (screen.height / 2) - 1) * 2.5
    element.style.left = `${offsetX - 2.5}vw`
    element.style.top = `${offsetY - 2.5}vh`
    // console.log(50 + offsetX + "%")
    // element.style.left = `${50 + offsetX}%`;
    // element.style.top = `${50 + offsetY}%"`;
});