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

	/* --------------------------------------------------------------------------------------------------------------------------
PAYMENT PLACEHOLDER
-----------------------------------------------------------------------------------------------------------------------------*/
	const expireDate = document.getElementById("expiry-date");
	function updatePlaceholder() {
		if (window.innerWidth < 768) {
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
MAIN PAGE - GALLERY SCROLL EQUILIBRIUM
-----------------------------------------------------------------------------------------------------------------------------*/
	const mainGalleryGrid = document.querySelector("#main-gallery-grid");
	const galleryBox = document.querySelector("#main-gallery-box");

	function updateGridHeight() {
		if (window.innerWidth < 768) {
			const item1height = getSumOfChildrenHeight(mainGalleryGrid.querySelector(".item-1"));
			const item2height = getSumOfChildrenHeight(mainGalleryGrid.querySelector(".item-2"));
			const item3height = getSumOfChildrenHeight(mainGalleryGrid.querySelector(".item-3"));
			const item4height = getSumOfChildrenHeight(mainGalleryGrid.querySelector(".item-4"));
			const finishHeight = max(item2height, item4height) + max(item1height, item3height) + 21;

			if (item4height <= item2height) {
				galleryBox.style.minHeight = item2height +  "px";
			} else {
				galleryBox.style.minHeight = item4height +  "px";
			}

			console.log("i1 - ", item1height, "i3 - ", item3height);
			console.log("i4 - ", item4height, "i2 - ", item2height);
			console.log(finishHeight);
			mainGalleryGrid.style.maxHeight = finishHeight + "px";
		} else {
			mainGalleryGrid.style.removeProperty("max-height");
			galleryBox.style.removeProperty('min-height');
		}
	}
	if (mainGalleryGrid) {
		window.onload = updateGridHeight;
		window.onresize = updateGridHeight;
	}

	/* --------------------------------------------------------------------------------------------------------------------------
EXTRA FUNCTIONS
-----------------------------------------------------------------------------------------------------------------------------*/
	function getSumOfChildrenHeight(parentElement) {
		let sum = 0;
		for (const child of parentElement.children) {
			sum += child.offsetHeight;
		}
		return sum;
	}

	function max(a, b) {
		if (a > b) {
			return a;
		} else {
			return b;
		}
	}

	/* --------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------*/
});
