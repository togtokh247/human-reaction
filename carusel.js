const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.slides');

let i = 0;

prevBtn.addEventListener('.click' , () => {
    slides.style.transform = `translateX(-${i * 300}px)`;
})

nextBtn.addEventListener('.click', () => {
    slides.style.transform = `translateX(-${i * 300}px)`;
})