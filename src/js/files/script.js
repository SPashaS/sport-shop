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