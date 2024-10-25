let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initial display
showSlide(currentSlide);



//menu button
function showMenu(pageIndex) {
    // ซ่อนเมนูทั้งหมดก่อน
    const pages = document.querySelectorAll('.menu-page');
    const buttons = document.querySelectorAll('.tab-button');

    pages.forEach((page, index) => {
        page.classList.remove('active');
        buttons[index].classList.remove('active');
    });

    // แสดงเมนูที่เลือกและเปลี่ยนสีปุ่ม
    pages[pageIndex].classList.add('active');
    buttons[pageIndex].classList.add('active');

    // รอให้ CSS transition มีผลแล้วค่อยแสดงความสมูต
    setTimeout(() => {
        pages[pageIndex].classList.add('show');
    }, 50); // ปรับ delay ให้เหมาะสมกับ transition
}
