const mediaQuery = window.matchMedia('(max-width: 450px)');

function handleScreenChange(e) {
    if (e.matches) {
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let slideIndex = 1;
        showSlides(slideIndex);

        prev.addEventListener('click', () => changeSlides(-1))
        next.addEventListener('click', () => changeSlides(1))

        function changeSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
        
            let slides = document.getElementsByClassName("member-card");

            if (n > slides.length) {slideIndex = 1}    

            if (n < 1) {slideIndex = slides.length}

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            slides[slideIndex-1].style.display = "block";  
        }
    };
}

handleScreenChange(mediaQuery);

mediaQuery.addEventListener('resize', handleScreenChange);