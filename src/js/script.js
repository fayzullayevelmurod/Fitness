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
		loop: true,
		speed: 800
	});
})