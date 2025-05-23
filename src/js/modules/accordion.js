export default class Accordion {
	constructor(opts = {}) {
		const defaultConfig = {
			accordion: ".accordion",
			button: ".accordion-btn",
			panel: ".accordion-panel",
			activeClass: "active",
		};

		this.options = Object.assign(defaultConfig, opts);
		this.accordions = document.querySelectorAll(this.options.accordion);

		this.setState();
	}

	listener() {
		this.accordions.forEach((ac) => {
			const btn = ac.querySelector(this.options.button);
			const panel = ac.querySelector(this.options.panel);
			btn.addEventListener("click", (e) => this.slidepanel(e, ac, btn, panel));
		});
	}

	slidepanel(e, ac, btn, panel) {
		panel.classList.toggle(this.options.activeClass);
		if (panel.classList.contains(this.options.activeClass)) {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
			panel.style.maxHeight = "0px";
			ac.classList.remove(this.options.activeClass);
		}
		btn.classList.toggle(this.options.activeClass);

		e.preventDefault();
	}

	setState() {
		this.accordions.forEach((ac) => {
			const btn = ac.querySelector(this.options.button);
			const panel = ac.querySelector(this.options.panel);

			const acActive = ac.classList.contains(this.options.activeClass);
			const btnActive = btn.classList.contains(this.options.activeClass);

			if (btnActive || acActive) {
				btn.classList.add(this.options.activeClass);
                panel.classList.add(this.options.activeClass);
				panel.style.maxHeight = panel.scrollHeight + "px";
			} else {
                btn.classList.remove(this.options.activeClass);
                panel.classList.remove(this.options.activeClass);				
				panel.style.maxHeight = "0px";
			}
		});
	}
}
