let currentIndex = 0;
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

        function nextSlide() {
            currentIndex = (currentIndex + 1) % (cards.length - 2);
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + (cards.length - 2)) % (cards.length - 2);
            updateSlider();
        }
        function updateSlider() {
            const translateXValue = -currentIndex * cardWidth;
            sliderWrapper.style.transform = `translateX(${translateXValue}px)`;
        }