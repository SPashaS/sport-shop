// Подключение функционала "Чертогов Фрилансера"
import {
	isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
	flsModules
} from "./modules.js";


function contactsInit() {
	let iconContact = document.querySelector('.contacts-header__button');
	let contactsBox = document.querySelector('.contacts-header__box')
	iconContact.addEventListener("click", function () {
		contactsBox.classList.toggle('open');
	});
}

contactsInit();


VK.Widgets.Group("vk_groups1", {
	mode: 0,
	width: "270px",
	height: "235"
}, 1);
VK.Widgets.Group("vk_groups2", {
	mode: 0,
	width: "270px",
	height: "235"
}, 1);


function pageMenuInit() {
	let pageIconMenu = document.querySelector(".menu-page__burger");
	let pageMenuBody = document.querySelector(".menu-page__body");
	if (pageIconMenu) {
		pageIconMenu.addEventListener("click", function (e) {
			pageIconMenu.classList.toggle("_active");
			pageMenuBody.classList.toggle("_active");
		});
	};
}
pageMenuInit();

// function subMenuInit() {
// 	let subMenuParents = document.querySelectorAll('.menu-page__item_parent');
// 	for (let index = 0; index < subMenuParents.length; index++) {
// 		const subMenuParent = subMenuParents[index];
// 		subMenuParent.addEventListener('click', function (e) {
// 			subMenuParent.classList.toggle('_active-sub');
// 		})
// 	}
// }
// subMenuInit();



let searchValue = document.querySelector('.search-page__value');
// let categoriesSearch = document.querySelector('.categories-search-page');
searchValue.addEventListener("click", function (e) {
	searchValue.classList.toggle('_active');
});

let checkboxCategories = document.querySelectorAll('.categories-search-page__checkbox');
for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener('change', function (e) {
		checkboxCategory.classList.toggle('_active');

		let checkboxActiveCategories = document.querySelectorAll('.categories-search-page__checkbox._active');
		if (checkboxActiveCategories.length > 0) {
			searchValue.classList.add('_categories');

			let searchQuantity = searchValue.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + " " + checkboxActiveCategories.length;
		} else {
			searchValue.classList.remove('_categories');
		}
	})
}



const menuParents = document.querySelectorAll('.menu-page__item_parent');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];

	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('_active-sub');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('_active-sub');
	});
	
}