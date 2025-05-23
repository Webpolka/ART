/* --------------------------------------------------------------------------------------------------------------------------
BASE HELPERS
-----------------------------------------------------------------------------------------------------------------------------*/
import { BaseHelpers } from "./helpers/base-helpers";
BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();

/* --------------------------------------------------------------------------------------------------------------------------
BURGER CODE
-----------------------------------------------------------------------------------------------------------------------------*/
const burgerBtn = document.querySelector("#mobile-burger");
const burgerClose = document.querySelector("#mobile-close");
const mobileNav = document.querySelector("#mobile-nav");
const body = document.querySelector("body");

if (burgerBtn && burgerClose && mobileNav) {
	burgerBtn.addEventListener("click", () => {
		mobileNav.classList.toggle("show");
		body.classList.toggle("no-scroll");
	});

	burgerClose.addEventListener("click", () => {
		mobileNav.classList.remove("show");
		body.classList.remove("no-scroll");
	});

	mobileNav.addEventListener("dblclick", () => {
		mobileNav.classList.remove("show");
		body.classList.remove("no-scroll");
	});
} else {
	console.log("Mobile navigation HTML in DOM is broken !");
}

/* --------------------------------------------------------------------------------------------------------------------------
ACCORDION
-----------------------------------------------------------------------------------------------------------------------------*/
import Accordion from "./modules/accordion";
new Accordion({
	accordion: ".accordion",
	button: ".accordion-btn",
	panel: ".accordion-panel",
	activeClass: "active",
}).listener();


/* --------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------*/

