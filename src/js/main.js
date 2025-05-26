import { BaseHelpers } from "./helpers/base-helpers";
import Accordion from "./modules/accordion";
import TransferElements from "./modules/transfer.js";

const isEven = (num) => num % 2 === 0;
window.addEventListener("DOMContentLoaded", function () {
	/* --------------------------------------------------------------------------------------------------------------------------
BASE HELPERS
-----------------------------------------------------------------------------------------------------------------------------*/

	BaseHelpers.addLoadedClass();
	BaseHelpers.calcScrollbarWidth();
	BaseHelpers.addTouchClass();

	/* --------------------------------------------------------------------------------------------------------------------------
BURGER MENU CODE
-----------------------------------------------------------------------------------------------------------------------------*/
	const burgerBtn = document.querySelector("#mobile-burger");
	const mobileNav = document.querySelector("#mobile-nav");
	const body = document.querySelector("body");

	if (burgerBtn && mobileNav) {
		burgerBtn.addEventListener("click", () => {
			mobileNav.classList.toggle("show");
			body.classList.toggle("no-scroll");
		});

		mobileNav.addEventListener("click", () => {
			mobileNav.classList.remove("show");
			body.classList.remove("no-scroll");
		});
	} else {
		console.log("Mobile navigation HTML in DOM is broken !");
	}

	/* --------------------------------------------------------------------------------------------------------------------------
ACCORDION
-----------------------------------------------------------------------------------------------------------------------------*/
	new Accordion({
		accordion: ".accordion",
		button: ".accordion-btn",
		panel: ".accordion-panel",
		activeClass: "active",
	}).listener();

	/* --------------------------------------------------------------------------------------------------------------------------
MAIN TRANSFER BLOCKS
-----------------------------------------------------------------------------------------------------------------------------*/
	const transferContainer = document.getElementById("main-transfer-cont");
	const transferDescription = document.getElementById("main-transfer-desc");

	if (transferContainer && transferDescription) {
		new TransferElements({
			sourceElement: transferDescription,
			breakpoints: {
				768: {
					targetElement: transferContainer,
					targetPosition: 0,
				},
			},
		});
	}

	/* --------------------------------------------------------------------------------------------------------------------------
SHOP PRODUCTS - ADAPTIVE TO 767px SHOW PAIR 
-----------------------------------------------------------------------------------------------------------------------------*/
	const shopProducts = document.querySelector(".products");
	if (shopProducts) {
		const allProducts = shopProducts.querySelectorAll(".product-card");
		const mediaSM = window.matchMedia("(max-width: 765px)");

		window.addEventListener("resize", remove);
		function remove() {
			if (mediaSM.matches) {
				if (!isEven(allProducts.length)) {
					allProducts[allProducts.length - 1].style.display = "none";
				}
			} else {
				allProducts[allProducts.length - 1].style.display = "block";
			}
		}
	}
});
/* --------------------------------------------------------------------------------------------------------------------------
PAYMENT PLACEHOLDER
-----------------------------------------------------------------------------------------------------------------------------*/
const expireDate = document.getElementById("expiry-date");
function updatePlaceholder() {
	console.log('yyy');
	
	if (window.innerWidth <= 768) {
		//  Пример ширины экрана для мобильных
		expireDate.placeholder = "MM/YY";
	} else {
		expireDate.placeholder = ""; //  Удалить placeholder для десктопа
	}
}
//  Вызвать функцию при загрузке страницы и при изменении размера окна
if (expireDate) {
	window.onload = updatePlaceholder;
	window.onresize = updatePlaceholder;
}

/* --------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------*/
