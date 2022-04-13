// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


function contactsInit() {
    let iconContact = document.querySelector('.contacts-header__button');
    let contactsBox = document.querySelector('.contacts-header__box')
    iconContact.addEventListener("click", function() {
        contactsBox.classList.toggle('open');
    });
}

contactsInit();


VK.Widgets.Group("vk_groups1", {mode: 0, width: "270px", height: "235"}, 1);
VK.Widgets.Group("vk_groups2", {mode: 0, width: "270px", height: "235"}, 1);


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

function subMenuInit() {
	let subMenuParents = document.querySelectorAll('.menu-page__item_parent');
	for (let index = 0; index < subMenuParents.length; index++) {
		const subMenuParent = subMenuParents[index];
		subMenuParent.addEventListener('click', function (e) {
			subMenuParent.classList.toggle('_active-sub');
		})
	}
}
subMenuInit();



function searchSelect() {
	let searchValue = document.querySelector('.search-page__value');
	// let categoriesSearch = document.querySelector('.categories-search-page');
	searchValue.addEventListener("click", function (e) {
		searchValue.classList.toggle('_active');
	});
}
searchSelect();