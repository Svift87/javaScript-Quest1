'use strict';

let item = document.querySelectorAll('.menu-item'),     // Нашли селектор
    menu = document.querySelector('.menu'),             // Нашли селектор
    li = document.createElement('li');                  // создали элемент

item[1].innerHTML = item[2].innerHTML;                  //Присволили 2 элементу значение 3
item[2].innerHTML = "Третий пункт";                     //Переименовали 3 пункт

li.classList.add('menu-item');                          //Вставили 
menu.appendChild(li);

item = document.querySelectorAll('.menu-item');

item[4].innerHTML = "Пятый пункт";

let body = document.querySelector('body');

body.style.backgroundImage = 'url(./img/apple_true.jpg)';

let textApple = document.querySelector('.title');

textApple.innerHTML = 'Мы продаем только подлинную технику Apple';

let advertising = document.querySelector('.adv');

advertising.remove();

let arr = [];

arr.push(prompt('Как вы относитесь к технике apple?', ''));

let promptText = document.querySelector('.prompt');

promptText.innerHTML = arr;

console.log(arr);




// Скрипт преподавателя

// let menu = document.getElementsByClassName("menu")[0],
//     menuItem = document.getElementsByClassName("menu-item"),
//     title = document.getElementById("title"),
//     adv = document.getElementsByClassName("adv")[0],
//     promptforApple = document.querySelector("#prompt"),
//     menuItemLi = document.createElement("li");

// menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

// menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
// menuItemLi.textContent = "Пятый элемент";                       
// menu.appendChild(menuItemLi);                                   


// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


// title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

// adv.remove();                                                   // Удалить рекламу со страницы

// let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
// promptforApple.textContent = yourOpinion;