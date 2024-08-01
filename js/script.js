document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slidesContainer = slider.querySelector('.slides-container');
    const slides = slidesContainer.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide berikutnya
    function showNextSlide() {
        
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
       
        currentSlide = (currentSlide + 1) % slideCount;
    }

    setInterval(showNextSlide, 3000); 
});
