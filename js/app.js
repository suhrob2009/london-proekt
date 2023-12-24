var menu = document.querySelector(".menu");
var bars = document.querySelector(".fa-bars");
var x = document.querySelector(".fa-x");
var buton = document.querySelectorAll('button');

bars.addEventListener("click", function () {
    menu.classList.add("active");
    bars.style.display = "none";
    x.style.display = "block";
})

x.addEventListener("click", function () {
    menu.classList.remove("active");
    bars.style.display = "block";
    x.style.display = "none";
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    loop: true,
});

var swiper = new Swiper(".mmySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    loop: true,
});

var swiper = new Swiper(".MySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    loop: true,
});

buton.forEach(function (button) {
    button.addEventListener('click', function () {
        // Aktiv tugmani tanlab olamiz
        var activeButton = document.querySelector('.addActive');

        // Aktiv tugmaga "active" klassini olib tashlaymiz
        if (activeButton) {
            activeButton.classList.remove('addActive');
        }

        // Bosilgan tugmaga "active" klassini qo'shamiz
        this.classList.add('addActive');
    });
});

var swiper = new Swiper(".HmySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".GmySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});



/* 
Menu Javascript
*/

    var ChangeBtns = document.querySelectorAll('.ChangeBtns');
    var FoodCards = document.querySelectorAll(' .menu_filter');

    ChangeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetDataSet = btn.getAttribute('data-set');
            FoodCards.forEach(function (card) {
                var cardDataSet = card.getAttribute('data-this');
                if (targetDataSet === 'ALL' || targetDataSet === cardDataSet) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

