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
})