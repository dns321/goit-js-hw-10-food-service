import menuMarcup from '../menu.json';
import menuTemplate from '../../templates/menu-items.hbs';

// Розмітка в DOM
const menuRef = document.querySelector('.js-menu');
const markupMenu = menuTemplate(menuMarcup);

menuRef.insertAdjacentHTML('beforeend', markupMenu);