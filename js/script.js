const target = document.querySelector(".hero")
target.addEventListener('mousemove', e => {
Object.assign(document.documentElement, {
    style:`
    --move-x: ${(e.clientX - window.innerWidth / 2)* -0.001}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2)* 0.001}deg;
    `
    })
}
)
