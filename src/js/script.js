window.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper(".services-swiper", {
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: ".swiper-button__next",
			prevEl: ".swiper-button__prev",
		},
		loop: true,
		speed: 800,
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		}
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
		speed: 800,
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			570: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: false,
			}
		}
	});

	// light gallery
	lightGallery(document.querySelector('.lightgallery'), {
		licenseKey: 'your_license_key',
		speed: 500,
		controls: true,
	});
	// lightGallery(document.getElementById('lightgallery'))

	// Aos
	AOS.init();

	// menu 
	const closeBtn = document.querySelector('.close-btn');
	const openBtn = document.querySelector('#open-btn');
	const menu = document.querySelector('.menu');
	const menuSm = document.querySelector('.menu-sm');

	openBtn.addEventListener('click', () => {
		menu.classList.remove('active-menu');
	})
	closeBtn.addEventListener('click', () => {
		menu.classList.add('active-menu');
	})

	menu.addEventListener('click', (e) => {
		if (e.target === menu && !e.target.classList.contains('active-menu')) {
			menu.classList.add('active-menu');
		}
	})


})