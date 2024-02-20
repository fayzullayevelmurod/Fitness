window.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper(".services-swiper", {
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: ".swiper-button__next",
			prevEl: ".swiper-button__prev",
		},
		loop: true,
		speed: 800
	});

	var swiper = new Swiper(".comments-swiper", {
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: ".swiper-button__next2",
			prevEl: ".swiper-button__prev2",
		},
		centeredSlides: true,
		loop: true,
		speed: 800
	});

	// light gallery
	lightGallery(document.querySelector('.lightgallery'), {
		licenseKey: 'your_license_key',
		speed: 500,
		controls: true,
	});
	// lightGallery(document.getElementById('lightgallery'))
})