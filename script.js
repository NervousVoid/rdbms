// Все константы, нужные для работы
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const th200 = document.querySelectorAll(".td200");
const th201 = document.querySelectorAll(".td201");
const elemType = document.querySelector(".element-type");
const sliderItems = document.querySelectorAll(".slider-item");

// Слайдер типов связей
if (sliderItems.length > 0){
    slider();
}

function slider(){
    const sliderLine = document.querySelector(".slider-line");
    let count = 0;
    let width;

    function init() {
        width = document.querySelector(".slider").offsetWidth;
        sliderLine.style.width = width * sliderItems.length + "px";
        sliderItems.forEach(item => {
            item.style.width = width + "px";
            item.style.height = "auto";
        });
    }

    window.addEventListener("resize", init);

    init();
    
    document.querySelector(".one-to-one").addEventListener("click", () => {
        sliderLine.style.transform = "translate(0px)";
    });
    
    document.querySelector(".many-to-many").addEventListener("click", () => {
        sliderLine.style.transform = "translate(-" + 1 * width + "px)";
    });
    
    document.querySelector(".one-to-many").addEventListener("click", () => {
        sliderLine.style.transform = "translate(-" + 2 * width + "px)";
    });
}

// Меню-гамбургер для мобильных устройств
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Множественное выделение полей в таблице
document.querySelectorAll("td").forEach(cur => cur.addEventListener("mouseover", () => {
    let curVal = cur.innerHTML;
    document.querySelectorAll("td").forEach(n => {
        if (n.innerHTML == curVal) {
            n.classList.toggle("active");
        }
    })
}));

document.querySelectorAll("td").forEach(cur => cur.addEventListener("mouseout", () => {
    let curVal = cur.innerHTML;
    document.querySelectorAll("td").forEach(n => {
        if (n.innerHTML == curVal) {
            n.classList.toggle("active");
        }
    })
}));

// Вывод названий элементов таблицы
document.querySelectorAll("td").forEach(n => n.addEventListener("mouseover", () => {
    if (n.classList.contains("primkey")) {
        elemType.innerHTML = "Первичный ключ (Primary key)";
    }
    if (n.classList.contains("forkey")) {
        elemType.innerHTML = "Внешний ключ (Foreign key)";
    }
    if (n.classList.contains("field")) {
        elemType.innerHTML = "Поле";
    }
}))
