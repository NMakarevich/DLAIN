let nav = document.querySelector(".page-nav");
let tabsNav = nav.querySelectorAll("li");
let tabs = document.querySelectorAll(".tab");
let selectedTab = '';

for (let tabNav of tabsNav) {
	tabNav.onclick = function () {
		removeClass(tabsNav, "selected");
		tabNav.classList.add("selected");
		selectedTab = tabNav.dataset.nav;
		for (let tab of tabs) {
			if (tab.classList.contains(selectedTab)) {
				tab.classList.remove("hidden");
			}
			else if (!tab.classList.contains("hidden")) {
				tab.classList.add("hidden");
			}
		}
	}
}

let removeClass = function (array, itemClass) {
	for (let i = 0; i < array.length; i++) {
			if (array[i].classList.contains(itemClass)) {
				array[i].classList.remove(itemClass);
			}
	};
}