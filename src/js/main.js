import { BaseHelpers } from "./helpers/base-helpers";
import Accordion from "./modules/accordion";
import TransferElements from './modules/transfer.js';

window.addEventListener("DOMContentLoaded", function () {
	/* --------------------------------------------------------------------------------------------------------------------------
BASE HELPERS
-----------------------------------------------------------------------------------------------------------------------------*/

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
	new Accordion({
		accordion: ".accordion",
		button: ".accordion-btn",
		panel: ".accordion-panel",
		activeClass: "active",
	}).listener();

	/* --------------------------------------------------------------------------------------------------------------------------
MAIN BOUTIQUE - MORE REMOVER
-----------------------------------------------------------------------------------------------------------------------------*/
	const mainBoutique = document.querySelector("#main-boutique");
	if (mainBoutique) {
		const allProducts = mainBoutique.querySelectorAll(".product-card");
		const mediaSM = window.matchMedia("(max-width: 765px)");

		window.addEventListener("resize", remove);
		function remove() {
			if (mediaSM.matches) {
				allProducts.forEach((prod, idx) => {
					idx > 1 ? (prod.style.display = "none") : "";
				});
				return;
			}
			allProducts.forEach((prod, idx) => {
				idx > 1 ? (prod.style.display = "block") : "";
			});
		}
	}

	/* --------------------------------------------------------------------------------------------------------------------------
MAIN TRANSFER BLOCKS
-----------------------------------------------------------------------------------------------------------------------------*/
const transferImages = document.getElementById('main-transfer-images');
const transferImg = document.getElementById('main-transfer-img');

const transferText = document.getElementById('main-transfer-text');
const transferDesc = document.getElementById('main-transfer-desc');

if (transferText && transferDesc && transferImages && transferImg) {
  new TransferElements(      
	{
      sourceElement: transferImg,
      breakpoints: {
        576: {
          targetElement: transferText,
          targetPosition: 0         
        }
      }
    },
	{
      sourceElement: transferDesc,
      breakpoints: {
        576: {
          targetElement: transferImages,
          targetPosition: 1          
        }
      }
    }
  )
}

/* --------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------*/


});
