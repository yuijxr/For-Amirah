const greenBtn = document.querySelector('.green');
const redBtn = document.querySelector('.red');
const statement = document.querySelector('.statement');
const img = document.querySelector('.img');
const link = document.querySelector('.link');

greenBtn.addEventListener('click', () => {
    setTimeout(() => {
        statement.textContent = "You are my valentines date!";
        img.src = "https://i.redd.it/0z6x0xp8vwea1.jpg";
        redBtn.style.display = "none"
        link.style.display = "inline-block"
    }, 200);
})

redBtn.addEventListener('mouseover', () => {
    const redBtnRect = redBtn.getBoundingClientRect();
    const maxX = window.innerWidth - redBtnRect.width;
    const maxY = window.innerHeight - redBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setTimeout(() => {
        redBtn.style.left = randomX + "px";
        redBtn.style.top = randomY + "px"; 
    }, 100);
});
